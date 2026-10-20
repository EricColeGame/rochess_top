import { BookOpen, Code2, Cpu, Gamepad2, LayoutGrid, Lightbulb, Users, type LucideIcon } from "lucide-react";

interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "codes", path: "/codes", icon: Code2, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Cpu, isContentType: true },
  { key: "controls", path: "/controls", icon: Gamepad2, isContentType: true },
  { key: "modes", path: "/modes", icon: LayoutGrid, isContentType: true },
  { key: "community", path: "/community", icon: Users, isContentType: true },
  { key: "tips", path: "/tips", icon: Lightbulb, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
