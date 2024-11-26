"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { ChevronLeft } from "lucide-react";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

export function NavCollapsible({ item, dashboardId }) {
  const pathname = usePathname();

  const defaultOpen = item.children?.some(
    (subItem) => pathname === `/dashboard/${dashboardId}${subItem.url}`
  );

  return (
    <Collapsible key={item.name} asChild defaultOpen={defaultOpen} className="group/collapsible">
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton size="lg" tooltip={item.name}>
            {item.icon && <item.icon />}
            <span>{item.name}</span>
            <ChevronLeft className="mr-auto transition-transform duration-200 group-data-[state=open]/collapsible:-rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {item.children?.map((subItem) => (
              <SidebarMenuSubItem key={subItem.name}>
                <SidebarMenuSubButton
                  size="md"
                  asChild
                  isActive={pathname === `/dashboard/${dashboardId}${subItem.url}`}
                >
                  <Link href={`/dashboard/${dashboardId}${subItem.url}`}>
                    {subItem.icon && <subItem.icon />}
                    <span>{subItem.name}</span>
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
}
