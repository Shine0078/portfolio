const worker = {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/" || url.pathname === "/portfolio") {
      url.pathname = "/portfolio/";
      return Response.redirect(url, 302);
    }

    return env.ASSETS.fetch(request);
  },
};

export default worker;
