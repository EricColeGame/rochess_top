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
  description: "Explore RoChess guides for chess puzzles, opening strategies, AI opponents, rated matches, move analysis, and beginner tips. Improve your skills and climb the leaderboards.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://rochess.top",
  supportEmail: "support@rochess.top",
  gameUrl: "https://www.roblox.com/games/139717576471404/RoChess",
  heroVideoId: "GHg0oyMuQCE",
  social: {
    discord: "https://www.roblox.com/communities/991905923/1-Elo-Chess",
    youtube: "https://www.youtube.com/watch?v=GHg0oyMuQCE",
  },
  locales: ["en", "es", "pt", "de", "fr", "ja"],
  defaultLocale: "en",
};
