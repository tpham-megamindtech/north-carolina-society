import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "content/articles");

// Build a per-category pool of verified Unsplash IDs (order preserved).
const validText = fs.readFileSync(path.join(__dirname, "valid_images.txt"), "utf8");
const pool = {};
for (const line of validText.trim().split("\n")) {
  const [cat, id] = line.trim().split(/\s+/);
  (pool[cat] ||= []).push(id);
}

fs.mkdirSync(OUT, { recursive: true });

export function generate(category, articles) {
  const ids = pool[category] || [];
  articles.forEach((a, i) => {
    const id = ids[i];
    if (!id) throw new Error(`Not enough verified images for ${category} (index ${i})`);
    const cover = `https://images.unsplash.com/photo-${id}?q=80&w=1600&auto=format&fit=crop`;
    const lines = [
      "---",
      `title: ${JSON.stringify(a.title)}`,
      `slug: "${a.slug}"`,
      `excerpt: ${JSON.stringify(a.excerpt)}`,
      `category: "${category}"`,
      `date: "${a.date}"`,
      `coverImage: "${cover}"`,
      `featured: ${a.featured ? "true" : "false"}`,
      `imageCredit: ${JSON.stringify("Photo: Unsplash/" + a.credit)}`,
      "---",
      "",
      a.body.trim(),
      "",
    ];
    fs.writeFileSync(path.join(OUT, `${a.slug}.md`), lines.join("\n"));
  });
  console.log(`✓ Wrote ${articles.length} article(s) for "${category}"`);
}
