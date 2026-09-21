export type BlogPost = {
  slug: string;
  keyword: string;
  title: string;
  seoDescription: string;
  excerpt: string;
  date: string;
  dateDisplay: string;
  image: string;
  imageW: number;
  imageH: number;
  imageAlt: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "stormschade-tuin-hasselt",
    keyword: "stormschade tuin Hasselt",
    title: "Stormschade in uw tuin in Hasselt: wat nu?",
    seoDescription:
      "Stormschade in uw tuin in Hasselt? Lees wat u eerst zelf checkt, wanneer u beter wacht op een vakman, en hoe Mani Verdi opruimt en herstelt.",
    excerpt:
      "Een omgewaaide boom, verzakte bestrating of een kapotte haag na storm: dit is de volgorde waarin u het best te werk gaat.",
    date: "2026-09-18",
    dateDisplay: "18 september 2026",
    image: "/images/stormschade.jpg",
    imageW: 1440,
    imageH: 1800,
    imageAlt: "Omgewaaide boom en stormschade in een tuin, opgeruimd door Mani Verdi",
  },
];
