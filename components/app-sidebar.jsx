"use client";
// constants
import sidebar from "@/constants/sidebar";
// components
// import { NavMain } from "@/components/nav-main";
import { NavManagement } from "@/components/nav-management";
import { NavUser } from "@/components/nav-user";
import { AccountSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <AccountSwitcher />
      </SidebarHeader>
      <SidebarContent>
        {/* <NavMain items={sidebar.navMain} /> */}
        <NavManagement managements={sidebar.managements} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={sidebar.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
