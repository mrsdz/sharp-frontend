"use client";
// store
import { useAppStore } from "@/store/provider-store";
// components
import { SidebarGroup, SidebarMenu } from "@/components/ui/sidebar";
import { NavCollapsible } from "@/components/nav-collapsible";
import { NavSingle } from "@/components/nav-single";

export function NavManagement({ dashboardId, items }) {
  const { permissions } = useAppStore();

  // Filter visible items first
  const visibleItems = items.filter((item) => permissions.includes(item.permission));

  // If no visible items, don't render anything
  if (visibleItems.length === 0) return null;

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden pt-0">
      <SidebarMenu>
        {visibleItems.map((item) =>
          item.children ? (
            <NavCollapsible key={item.name} item={item} dashboardId={dashboardId} />
          ) : (
            <NavSingle key={item.name} item={item} dashboardId={dashboardId} />
          )
        )}
      </SidebarMenu>
    </SidebarGroup>
  );
}
