"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
// store
import { useAppStore } from "@/store/provider-store";
// components
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavManagement({ dashboardId, managements }) {
  const { permissions } = useAppStore();
  const pathname = usePathname();

  // Filter visible items first
  const visibleItems = managements.filter((item) => permissions.includes(item.permission));

  // If no visible items, don't render anything
  if (visibleItems.length === 0) return null;

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden pt-0">
      <SidebarMenu>
        {visibleItems.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton
              isActive={pathname === `/dashboard/${dashboardId}${item.url}`}
              asChild
              size="lg"
            >
              <Link href={`/dashboard/${dashboardId}${item.url}`}>
                <item.icon className="[&>svg]:size-10" />
                <span>{item.name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
