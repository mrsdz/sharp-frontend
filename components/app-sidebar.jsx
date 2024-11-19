"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
// store
import { useAppStore } from "@/store/provider-store";
// constants
import sidebar from "@/constants/sidebar";
// components
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

export function AppSidebar({ userInfo, permissions, ...props }) {
  const pathname = usePathname();
  const dashboardId = pathname.split("/")[2];
  const { setPermissions } = useAppStore();

  useEffect(() => {
    if (permissions.value) {
      setPermissions(JSON.parse(permissions.value));
    }
  }, [permissions]);

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <StoreSwitcher />
      </SidebarHeader>
      <SidebarContent className="gap-0">
        <NavManagement dashboardId={dashboardId} items={sidebar} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userInfo} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
