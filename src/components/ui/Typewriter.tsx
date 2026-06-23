"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
  className?: string;
}

export function Typewriter({
  words,
  typingSpeed = 90,
  deletingSpeed = 45,
  pause = 1800,
  className,
}: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    if (!deleting && sub === words[index]) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }

    if (deleting && sub === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const t = setTimeout(
      () => {
        setSub((prev) =>
          deleting
            ? words[index].slice(0, prev.length - 1)
            : words[index].slice(0, prev.length + 1)
        );
      },
      deleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(t);
  }, [sub, deleting, index, words, typingSpeed, deletingSpeed, pause]);

  return (
    <span className={className}>
      <span className="text-text">{sub}</span>
      <span
        aria-hidden="true"
        className="ml-0.5 inline-block w-[2px] h-[1em] -mb-[0.15em] bg-text/70 animate-pulse"
      />
    </span>
  );
}
