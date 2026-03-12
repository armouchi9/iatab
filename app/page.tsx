import fs from "fs";
import path from "path";
import IaTabClient from "./IaTabClient";

export default function Home() {
  const html = fs.readFileSync(
    path.join(process.cwd(), "public/index-original.html"),
    "utf-8"
  );
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  const bodyContent = bodyMatch ? bodyMatch[1] : "";

  return (
    <>
      <IaTabClient />
      <div dangerouslySetInnerHTML={{ __html: bodyContent }} />
    </>
  );
}
