import {
  Bell, LayoutDashboard, SlidersHorizontal
} from "lucide-react";

export const sidebarRoutes = [
  {
    Icon: LayoutDashboard,
    name: "dashboard",
    path: "/",
  },

  {
    Icon: Bell,
    name: "all alerts",
    path: "/alert",
  },

  {
    Icon: SlidersHorizontal,
    name: "settings",
    path: "/setting",
  },
];
