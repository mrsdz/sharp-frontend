"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
// constants
import sidebar from "@/constants/sidebar";
// components
// import { NavMain } from "@/components/nav-main";
import { NavManagement } from "@/components/nav-management";
import { NavUser } from "@/components/nav-user";
import { StoreSwitcher } from "@/components/store-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Home } from "lucide-react";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

export function AppSidebar({ userInfo, ...props }) {
  const pathname = usePathname();

  const dashboardId = pathname.split("/")[2];

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <StoreSwitcher />
      </SidebarHeader>
      <SidebarContent className="gap-0">
        <SidebarGroup className="group-data-[collapsible=icon]:hidden pb-0">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton isActive={pathname === `/dashboard/${dashboardId}`} asChild>
                <Link href={`/dashboard/${dashboardId}`}>
                  <Home />
                  <span>داشبورد</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        {/* <NavMain items={sidebar.navMain} /> */}
        <NavManagement dashboardId={dashboardId} managements={sidebar.managements} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userInfo} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
