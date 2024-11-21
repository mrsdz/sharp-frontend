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
  PackageMinus,
  PackagePlus,
  PackageOpen,
} from "lucide-react";
// constants
import { VIEW_STAFF } from "@/constants/permissions";

const sidebar = [
  {
    name: "داشبورد",
    url: "/",
    icon: Home,
    permission: VIEW_STAFF,
  },
  {
    name: "کاربران",
    url: "/staff",
    icon: Users,
    permission: VIEW_STAFF,
  },
  {
    name: "انبارداری",
    icon: PackageOpen,
    permission: VIEW_STAFF,
    children: [
      {
        name: "اسناد خرید",
        url: "/warehousing/purchase_documents",
        icon: PackagePlus,
      },
      {
        name: "اسناد فروش",
        url: "#",
        icon: PackageMinus,
      },
      {
        name: "انبار",
        url: "#",
        icon: Package,
      },
    ],
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
];

export default sidebar;
