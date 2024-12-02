"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
// api
import getSingleStore from "@/api/dashboard/info/get-single-store";
import getStores from "@/api/dashboard/info/get-stores";
// components
import { ChevronsUpDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import StoreAvatar from "./store-avatar";

export function StoreSwitcher() {
  const router = useRouter();

  const { id } = useParams();
  const { isMobile } = useSidebar();

  const [storeInfo, setStoreInfo] = useState({ name: "", logo: null });
  const [storeList, setStoreList] = useState([]);

  useEffect(() => {
    async function fetchStoreData() {
      try {
        const [info, stores] = await Promise.all([getSingleStore(id), getStores()]);

        setStoreInfo({
          name: info.name,
          logo: info.logo?.file || null,
        });

        setStoreList(stores.results.filter((store) => store.id !== id));
      } catch (err) {
        console.error("Failed to fetch store data:", err);
      }
    }

    fetchStoreData();
  }, [id]);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        {storeList.length > 0 ? (
          <DropdownMenu dir="rtl">
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <div className="flex aspect-square size-8 items-center justify-center rounded-full bg-sidebar-primary text-sidebar-primary-foreground">
                  <StoreAvatar image={storeInfo.logo} name={storeInfo.name} />
                </div>
                <div className="grid flex-1 text-right text-sm leading-tight">
                  <span className="truncate font-semibold">{storeInfo.name}</span>
                </div>
                <ChevronsUpDown className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
              align="start"
              side={isMobile ? "bottom" : "right"}
              sideOffset={4}
            >
              <DropdownMenuLabel className="text-xs text-muted-foreground">
                داروخانه‌ها
              </DropdownMenuLabel>
              {storeList.map((store, index) => (
                <DropdownMenuItem
                  key={store.id}
                  onClick={() => router.push(`/dashboard/${store.id}`)}
                  className="gap-2 p-2"
                >
                  <div className="flex size-6 items-center justify-center rounded-sm border">
                    <StoreAvatar image={store.logo.file} name={store.name} />
                  </div>
                  {store.name}
                  {/* <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut> */}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <div className="flex aspect-square size-8 items-center justify-center rounded-full bg-sidebar-primary text-sidebar-primary-foreground">
              <StoreAvatar image={storeInfo.logo} name={storeInfo.name} />
            </div>
            <div className="grid flex-1 text-right text-sm leading-tight">
              <span className="truncate font-semibold">{storeInfo.name}</span>
            </div>
          </SidebarMenuButton>
        )}
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
