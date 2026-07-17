import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const outputDirectory = resolve("out");

function htmlFiles(directory) {
  return readdirSync(directory).flatMap((entry) => {
    const path = join(directory, entry);
    return statSync(path).isDirectory()
      ? htmlFiles(path)
      : path.endsWith(".html")
        ? [path]
        : [];
  });
}

for (const file of htmlFiles(outputDirectory)) {
  const source = readFileSync(file, "utf8");
  const optimized = source
    .replace(
      /<link(?=[^>]*\brel="preload")(?=[^>]*\bas="script")[^>]*>/g,
      ""
    )
    .replace(
      /<script[^>]*\bsrc="[^"]*\/_next\/static\/chunks\/[^"]+"[^>]*><\/script>/g,
      ""
    )
    .replace(
      /<script>(?:\(self\.__next_f=self\.__next_f\|\|\[\]\)|self\.__next_f)\.push\([\s\S]*?<\/script>/g,
      ""
    );

  writeFileSync(file, optimized);
  console.log(
    `${file.replace(`${outputDirectory}\\`, "")}: ${source.length} → ${optimized.length} bytes`
  );
}
