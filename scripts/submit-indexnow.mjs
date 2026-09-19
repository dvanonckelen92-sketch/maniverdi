import { readFile } from "node:fs/promises";

const HOST = "maniverdi.be";
const KEY = "8f7bb8978c104101956d7f25cc87a2e4";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const keyCheck = await fetch(KEY_LOCATION).catch(() => null);
if (!keyCheck || !keyCheck.ok) {
  console.error(
    `Kan de IndexNow-sleutel niet ophalen op ${KEY_LOCATION} (${keyCheck ? keyCheck.status : "geen verbinding"}). ` +
      `Waarschijnlijk is het SSL-certificaat voor ${HOST} nog niet klaar. Probeer later opnieuw.`
  );
  process.exit(1);
}

const sitemap = await readFile("dist/sitemap.xml", "utf8");
const urlList = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);

if (urlList.length === 0) {
  console.error("Geen URL's gevonden in dist/sitemap.xml. Draai eerst `npm run build`.");
  process.exit(1);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  }),
});

console.log(`IndexNow response: ${res.status} ${res.statusText}`);
console.log(`${urlList.length} URL's ingediend:`);
urlList.forEach((u) => console.log(" -", u));
