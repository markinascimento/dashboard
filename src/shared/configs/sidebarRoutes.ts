import {
  Bell,
  LayoutDashboard,
  MessageCircleMore,
  SlidersHorizontal,
  UserCircle,
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
    Icon: MessageCircleMore,
    name: "chat",
    path: "/chat",
  },

  {
    Icon: UserCircle,
    name: "my profile",
    path: "/profile",
  },

  {
    Icon: SlidersHorizontal,
    name: "settings",
    path: "/setting",
  },
];
