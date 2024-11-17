import { AudioWaveform, Command, GalleryVerticalEnd, Users } from "lucide-react";
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
      name: "کاربران",
      url: "/users",
      icon: Users,
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
