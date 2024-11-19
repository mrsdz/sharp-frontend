import { usePathname } from "next/navigation";
import Link from "next/link";

import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

function NavSingle({ item, dashboardId }) {
  const pathname = usePathname();

  return (
    <SidebarMenuItem>
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
  );
}

export { NavSingle };
