"use client";

import { Fragment } from "react";
import { useRouter } from "next/navigation";
// components
import { Button } from "@/components/ui/button";
import StoreAvatar from "@/components/store-avatar";
import { ArrowLeft } from "lucide-react";

export default function Accounts({ list }) {
  const router = useRouter();

  return (
    <ul>
      {list.results.map((store, index) => (
        <Fragment key={store.id}>
          <li
            onClick={() => router.push(`/dashboard/${store.id}`)}
            className="flex items-center justify-between hover:bg-accent/50 hover:text-accent-foreground cursor-pointer p-2 rounded-lg transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="flex aspect-square size-10 items-center justify-center rounded-full bg-sidebar-primary text-sidebar-primary-foreground">
                <StoreAvatar image={store.logo.file} name={store.name} />
              </div>
              <p className="text-sm">{store.name}</p>
            </div>
            <Button className="hover:bg-transparent" variant="ghost">
              <ArrowLeft />
            </Button>
          </li>
          {index !== list.results.length - 1 ? (
            <div className="border-b border-accent my-2 mx-2"></div>
          ) : null}
        </Fragment>
      ))}
    </ul>
  );
}
