export const site = {
  name: "Mani Verdi",
  tagline: "Tuinen & landschappen",
  phone: "+32 471 56 71 42",
  phoneHref: "+32471567142",
  email: "tuinen@maniverdi.be",
  url: "https://maniverdi.be",
  legalForm: "BV",
  companyNumber: "BE0788.616.730",
  foundingDate: "2022-07-14",
  founder: "Noah Campus",
  address: {
    addressLocality: "Hasselt",
    postalCode: "3500",
    addressRegion: "Limburg",
    addressCountry: "BE",
  },
  geo: { latitude: 50.9394, longitude: 5.2764 },
  openingHours: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
  openingHoursText: "Maandag tot vrijdag, 08:00 tot 18:00 uur",
  priceRange: "€€",
  social: {
    facebook: "https://www.facebook.com/p/Mani-Verdi-100085234217485/",
    instagram: "https://www.instagram.com/mani.verdi/",
    whatsapp: "https://wa.me/32471567142",
  },
  builtBy: {
    name: "Coop Consult",
    url: "https://coopconsult.be",
  },
} as const;

export const towns = [
  "Hasselt",
  "Genk",
  "Bilzen",
  "Heusden-Zolder",
  "Kermt",
  "Kuringen",
  "Wimmertingen",
  "Runkst",
  "Diepenbeek",
  "Zonhoven",
  "Herk-de-Stad",
  "Sint-Truiden",
] as const;

export type Service = {
  slug: string;
  keyword: string;
  navLabel: string;
  title: string;
  seoDescription: string;
  heroLede: string;
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "tuinontwerp-hasselt",
    keyword: "tuinontwerp Limburg",
    navLabel: "Tuinontwerp",
    title: "Tuinontwerp Limburg",
    seoDescription:
      "Tuinontwerp in heel Limburg op maat van uw perceel, grondsoort en gezin. Mani Verdi tekent een tuinplan en legt het nadien ook zelf aan.",
    heroLede:
      "Een tuinplan dat rekening houdt met bezonning, grondsoort en hoe u de tuin écht gebruikt, opgemaakt door hetzelfde team dat de aanleg nadien uitvoert, in heel Limburg.",
    image: "/images/tuinontwerp.jpg",
    imageAlt: "3D-tuinontwerp met houten pergola, loungehoek en terras, getekend door Mani Verdi",
  },
  {
    slug: "tuinaanleg-hasselt",
    keyword: "tuinaanleg Limburg",
    navLabel: "Tuinaanleg",
    title: "Tuinaanleg Limburg",
    seoDescription:
      "Tuinaanleg in heel Limburg: bestrating, beplanting en verlichting vakkundig uitgevoerd door Mani Verdi. Gratis werfbezoek en offerte op maat.",
    heroLede:
      "Van grondwerk tot de laatste plant: Mani Verdi legt tuinen aan in heel Limburg met professionele machines en duurzame materialen.",
    image: "/images/tuinaanleg.jpg",
    imageAlt: "Afgewerkt tuinaanlegproject met grindoprit bij een woning in Hasselt",
  },
  {
    slug: "tuinonderhoud-hasselt",
    keyword: "tuinonderhoud Limburg",
    navLabel: "Tuinonderhoud",
    title: "Tuinonderhoud Limburg",
    seoDescription:
      "Tuinonderhoud in heel Limburg: snoeiwerk, gazononderhoud en een vast onderhoudsplan het hele jaar door, door hetzelfde team als bij de aanleg.",
    heroLede:
      "Een tuin blijft maar mooi met regelmatig onderhoud. Mani Verdi verzorgt snoei, gazon en seizoenswerk in heel Limburg, het hele jaar door.",
    image: "/images/hagen.jpg",
    imageAlt: "Strak gesnoeide hagen bij een woning in Hasselt",
  },
  {
    slug: "grondwerken-hasselt",
    keyword: "grondwerken Limburg",
    navLabel: "Grond- & afbraakwerken",
    title: "Grondwerken Limburg",
    seoDescription:
      "Grondwerken en afbraakwerken in heel Limburg als stevige basis voor uw tuinproject. Grondverzet, afvoer en egalisatie door Mani Verdi.",
    heroLede:
      "Voor elk tuinproject dat begint bij nul: grondverzet, afbraak van oude verhardingen en egalisatie, uitgevoerd met professionele machines in heel Limburg.",
    image: "/images/grondwerken.jpg",
    imageAlt: "Grond- en afbraakwerken als basis voor een nieuw tuinproject",
  },
  {
    slug: "rioleringswerken-hasselt",
    keyword: "rioleringswerken Limburg",
    navLabel: "Rioleringswerken",
    title: "Rioleringswerken Limburg",
    seoDescription:
      "Rioleringswerken in heel Limburg bij tuinaanleg of renovatie: aansluiting, afkoppeling en herstel, uitgevoerd door Mani Verdi.",
    heroLede:
      "Bij een tuinrenovatie komt de riolering vaak mee aan de beurt. Mani Verdi legt en herstelt rioleringen als onderdeel van het grondwerk, in heel Limburg.",
    image: "/images/riolering.jpg",
    imageAlt: "Graafwerk voor een rioleringsleiding in een tuin in Hasselt",
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "In welke regio werkt Mani Verdi?",
    a: "Mani Verdi is gevestigd in Hasselt en werkt in heel Limburg, met Hasselt, Heusden-Zolder, Genk en Bilzen als belangrijkste werkgebieden, aangevuld met Kermt, Kuringen, Wimmertingen, Runkst, Diepenbeek, Zonhoven, Herk-de-Stad en Sint-Truiden.",
  },
  {
    q: "Wat kost een tuin laten aanleggen in Limburg?",
    a: "De kostprijs hangt af van de oppervlakte, het grondwerk en de gekozen materialen. Na een gratis werfbezoek, waar in Limburg dan ook, ontvangt u van Mani Verdi een duidelijke offerte op maat.",
  },
  {
    q: "Verzorgt Mani Verdi ook tuinonderhoud na de aanleg?",
    a: "Ja, naast tuinontwerp en tuinaanleg biedt Mani Verdi ook doorlopend tuinonderhoud, grond- en afbraakwerken en rioleringswerken aan, zodat uw tuin ook jaren na de aanleg nog verzorgd bij ligt.",
  },
  {
    q: "Hoe snel kan Mani Verdi starten met mijn project?",
    a: "Dat hangt af van het seizoen en de omvang van het werk. Bij het gratis werfbezoek krijgt u een realistische inschatting van de planning voor uw tuin, waar in Limburg u ook woont.",
  },
  {
    q: "Werkt Mani Verdi ook buiten Hasselt?",
    a: "Ja. Vanuit Hasselt rijdt Mani Verdi dagelijks uit naar tuinen in heel Limburg, met Heusden-Zolder, Genk en Bilzen als vaste werkgebieden naast Hasselt zelf.",
  },
];
