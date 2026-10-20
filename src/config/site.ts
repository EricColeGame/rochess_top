export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "RoChess Wiki",
  shortName: "RoChess",
  logoText: "R",
  tagline: "Chess Guides, Openings, Puzzles & Strategy",
  description: "Explore RoChess guides for chess puzzles, opening strategies, AI opponents, rated matches, and move analysis. Learn tactics, improve accuracy, and climb the leaderboards.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://rochess.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://rochess.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/139717576471404/RoChess",
  heroVideoId: "GHg0oyMuQCE",
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
