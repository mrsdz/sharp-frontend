"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
// components
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavManagement({ managements }) {
  const pathname = usePathname();

  const dashboardId = pathname.split("/")[2];

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>مدیریت</SidebarGroupLabel>
      <SidebarMenu>
        {managements.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton
              isActive={pathname === `/dashboard/${dashboardId}${item.url}`}
              asChild
            >
              <Link href={`/dashboard/${dashboardId}${item.url}`}>
                <item.icon />
                <span>{item.name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
