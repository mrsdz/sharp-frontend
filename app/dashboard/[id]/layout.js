import getUserInfo from "@/api/user/get-info";
// components
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import DynamicBreadcrumb from "@/components/dynamic-breadcrumb";
import ChangeTheme from "@/components/change-theme";
// utils
import { getCookie } from "@/utils/cookies";

export default async function DashboardLayout({ children }) {
  const user = await getUserInfo();
  const permissions = await getCookie("permissions");

  return (
    <>
      <SidebarProvider>
        <AppSidebar userInfo={user} permissions={permissions} />
        <SidebarInset className="bg-neutral-50 dark:bg-background">
          <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-mr-1" />
              <Separator orientation="vertical" className="ml-2 h-4" />
              <DynamicBreadcrumb />
            </div>
            <div className="flex items-center gap-2 px-4">
              <ChangeTheme />
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0 w-full md:w-[calc(100vw-16rem)]">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
