import {
  AudioWaveform,
  ChartArea,
  Command,
  GalleryVerticalEnd,
  HandCoins,
  Package,
  ScrollText,
  Umbrella,
  Users,
  Home,
} from "lucide-react";
// constants
import { VIEW_STAFF } from "@/constants/permissions";

const sidebar = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  managements: [
    {
      name: "داشبورد",
      url: "/",
      icon: Home,
      permission: VIEW_STAFF,
    },
    {
      name: "کاربران",
      url: "/users",
      icon: Users,
      permission: VIEW_STAFF,
    },
    {
      name: "انبارداری",
      url: "/404",
      icon: Package,
      permission: VIEW_STAFF,
    },
    {
      name: "نسخ",
      url: "/404",
      icon: ScrollText,
      permission: VIEW_STAFF,
    },
    {
      name: "گزارشات",
      url: "/404",
      icon: ChartArea,
      permission: VIEW_STAFF,
    },
    {
      name: "حسابداری",
      url: "/404",
      icon: HandCoins,
      permission: VIEW_STAFF,
    },
    {
      name: "سازمان‌های بیمه",
      url: "/404",
      icon: Umbrella,
      permission: VIEW_STAFF,
    },
  ],
  navMain: [
    {
      title: "کاربران",
      url: "#",
      icon: Users,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
  ],
};

export default sidebar;
