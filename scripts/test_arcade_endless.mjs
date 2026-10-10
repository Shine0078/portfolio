/**
 * Deterministic, dependency-free regression test for the standalone Code Runner.
 * Exercises real inline game logic against a minimal canvas/DOM simulation.
 * Run with: node scripts/test_arcade_endless.mjs
 */
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import vm from 'node:vm';

const html = readFileSync(resolve('public/arcade/index.html'), 'utf8');
const script = html.match(/<script>\s*([\s\S]*?)<\/script>/)?.[1];
assert(script, 'Code Runner inline script is missing');
assert.match(html, /ENDLESS MODE|ENDLESS ARCADE|MODE: ENDLESS|Endless waves/, 'The UI must describe endless mode');

const noop = () => {};
const canvasContext = {
  fillRect: noop, strokeRect: noop, beginPath: noop, moveTo: noop, lineTo: noop, closePath: noop,
  fill: noop, stroke: noop, arc: noop, save: noop, restore: noop, translate: noop,
  rotate: noop, fillText: noop,
  createRadialGradient: () => ({ addColorStop: noop }),
};

function boot(random, mobile = false) {
  const stored = new Map();
  const makeNode = () => ({
    textContent: '', style: {}, handlers: {},
    setAttribute: noop,
    addEventListener(type, callback) { this.handlers[type] ??= []; this.handlers[type].push(callback); },
    click() { for (const callback of this.handlers.click ?? []) callback({ preventDefault: noop }); },
    getBoundingClientRect: () => ({ left: 0, width: 960 }),
    setPointerCapture: noop,
  });
  const nodes = Object.fromEntries(['game','announcement','score','best','lives','wave','shield','start','pause','sound','left','right'].map(k => [k,makeNode()]));
  nodes.game.getContext = () => canvasContext;
  const listeners = {};
  let frame = null, t = 0, id = 0;
  const viewport = {mobile, callback: null};
  const fakeMath = Object.create(Math);
  fakeMath.random = random;
  const sandbox = {
    Math:fakeMath,
    document: {
      querySelector: () => nodes.game,
      getElementById: id => nodes[id] ?? null,
      addEventListener(type, callback) { listeners[type] = callback; },
      hidden: false,
    },
    window: {
      matchMedia: query => query.includes("max-width")
        ? {get matches() {return viewport.mobile;}, addEventListener(_type,fn) {viewport.callback=fn;}}
        : {matches:true},
      addEventListener:noop,
    },
    localStorage: {
      getItem: key => stored.get(key) ?? null,
      setItem: (key,value) => stored.set(key,value),
    },
    requestAnimationFrame(callback) {frame = callback; return ++id;},
  };
  vm.runInNewContext(script,sandbox,{filename:'arcade/index.html',timeout:1500});
  return {
    nodes,stored,
    rotate(isMobile) {
      viewport.mobile = isMobile;
      viewport.callback?.();
    },
    frames(n) {
      for(let i=0;i<n;i++) {
        assert(typeof frame==='function','Animation loop stopped unexpectedly');
        const next=frame;frame=null;t+=1000/60;next(t);
      }
    },
    key: (type,key) => listeners[type]?.({key,repeat:false,preventDefault:noop}),
  };
}

let mode = 'crystal', calls = 0;
const random = () => {
  if(mode==='crystal') return .5;
  // Spawn order: type, x, angle, speed, next interval. Bugs at screen centre.
  return [ .8,.5,.5,.5,.5 ][(calls++)%5];
};
const run = boot(random);
const {nodes,stored} = run;
assert.equal(nodes.game.width, 960, 'Desktop game should remain wide');
assert.equal(nodes.game.height, 520, 'Desktop game height should remain unchanged');
nodes.start.click();
run.frames(960);
const scored = Number(nodes.score.textContent);
assert(scored>=150, 'Score did not reach the 100 XP threshold and continue: '+scored);
assert(Number(nodes.wave.textContent)>=2, 'Wave did not increase past 100 XP');
assert(Number(nodes.best.textContent)>=scored, 'Personal best did not track high score');
assert.equal(Number(stored.get('shine0078-code-runner-best')),scored, 'Personal best not persisted');
assert(!/LEVEL COMPLETE|GAME OVER/i.test(nodes.announcement.textContent), 'Gameplay stopped after milestone');
run.frames(240);
assert(Number(nodes.score.textContent)>scored, 'Game did not continue collecting XP past 100');

nodes.pause.click();
assert.match(nodes.announcement.textContent,/paused/i);
const pausedScore=nodes.score.textContent;
run.frames(240);
assert.equal(nodes.score.textContent,pausedScore,'Paused game updated score');
nodes.pause.click();
assert.match(nodes.announcement.textContent,/resumed/i);
run.frames(240);
assert(Number(nodes.score.textContent)>Number(pausedScore),'Game did not resume after pausing');

nodes.start.click();
assert.equal(nodes.score.textContent,'000','Restart failed to reset score');
assert.equal(nodes.wave.textContent,'01','Restart failed to reset wave');
assert(Number(nodes.best.textContent)>100,'Restart erased personal best');
mode='bugs';calls=0;
run.frames(1000);
assert.match(nodes.announcement.textContent,/game over/i,'Game over must still happen at zero lives');
assert.equal(nodes.lives.textContent,'—','Zero lives was not detected');
const afterLoss=nodes.score.textContent;
run.frames(90);
assert.equal(nodes.score.textContent,afterLoss,'Game continued updating score after game over');
// Portrait screens must use a taller world, survive rotation, and retain progress.
mode='crystal';
const mobileRun = boot(random, true);
assert.equal(mobileRun.nodes.game.width, 620, 'Phone world should be narrower');
assert.equal(mobileRun.nodes.game.height, 800, 'Phone world should be taller');
mobileRun.nodes.start.click();
mobileRun.frames(960);
const mobileScore = Number(mobileRun.nodes.score.textContent);
assert(mobileScore>=100,'Portrait mode should score past the first milestone');
mobileRun.rotate(false);
assert.equal(mobileRun.nodes.game.width,960,'Landscape rotation should restore wide game');
assert.equal(mobileRun.nodes.game.height,520,'Landscape rotation should restore wide height');
assert.equal(Number(mobileRun.nodes.score.textContent),mobileScore,'Rotation reset the score');
mobileRun.frames(240);
assert(Number(mobileRun.nodes.score.textContent)>mobileScore,'Game did not continue after rotating');
const beforeBack = Number(mobileRun.nodes.score.textContent);
mobileRun.rotate(true);
assert.equal(mobileRun.nodes.game.width,620);
assert.equal(mobileRun.nodes.game.height,800);
assert.equal(Number(mobileRun.nodes.score.textContent),beforeBack,'Second rotation reset score');
const tapRun = boot(random, true);
tapRun.nodes.game.handlers.pointerdown[0]({pointerId:1,clientX:480});
assert.match(tapRun.nodes.announcement.textContent,/Game on!/,'Tapping the game field should start on phones');
tapRun.nodes.game.handlers.pointerup[0]();
console.log('PASS: endless gameplay, mobile tap-to-start, 620x800 phone portrait, 960x520 desktop/landscape, rotation without score loss, save, pause, restart and lives.');
