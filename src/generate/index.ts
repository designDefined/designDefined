import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer as createViteServer } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p: string) => path.resolve(__dirname, p);

const generate = async () => {
  const vite = await createViteServer({
    server: { middlewareMode: true, hmr: false },
    appType: "custom",
  });

  const template = await fs.readFile(toAbsolute("./index.html"));
  const { render } = (await vite.ssrLoadModule("/src/generate/entry-server.tsx")) as { render: () => string };
  const jsAssets = (await fs.readdir(toAbsolute("../../dist/assets"))).filter(filename => filename.endsWith(".js"));
  const cssAssets = (await fs.readdir(toAbsolute("../../dist/assets"))).filter(filename => filename.endsWith(".css"));
  const rendered = render();

  const html = template
    .toString()
    .replace("<!--head-->", cssAssets.map(filename => `<link rel="stylesheet" href="/assets/${filename}">`).join("\n"))
    .replace("<!--body-->", rendered)
    .replace("<!--script-->", jsAssets.map(filename => `<script src="/assets/${filename}"></script>`).join("\n"));

  await fs.writeFile(toAbsolute("../../dist/index.html"), html);
  console.log("Generated!");
};

generate().then(() => process.exit());
