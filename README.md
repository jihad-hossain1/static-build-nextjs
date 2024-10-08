
## Getting Started

First, run the development server:

```bash
npm run dev
```

#### add ``` server.js ```file on main folder
```
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = process.env.port || 3000;
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();
app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;
      if (pathname === "/a") {
        await app.render(req, res, "/a", query);
      } else if (pathname === "/b") {
        await app.render(req, res, "/b", query);
      } else {
        await handle(req, res, parsedUrl);
      }
    } catch (err) {
      console.error("Error occurred handling", req.url, err);
      res.statusCode = 500;
      res.end("internal server error");
    }
  })
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});

```

#### add this line on ```package.json```
```
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "NODE_ENV=production node server.js",
    "lint": "next lint"
  },

```

#### add this code on ```next.config.mjs```

```
const nextConfig = {
    output: "export",
};
```


# then
```
npm run build
```

