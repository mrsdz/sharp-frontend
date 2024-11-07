"use client";

import { usePathname } from "next/navigation";
import { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
// helper
import validateToken from "@/utils/validateToken";

const DynamicBreadcrumb = () => {
  const pathname = usePathname();
  const dashboardId = pathname.split("/")[2];
  const pathSegments = pathname.split("/").filter((segment) => segment); // Split and filter empty segments

  const segmentNames = {
    dashboard: "داشبورد",
    // users
    users: "کاربران",
  };

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathSegments.map((segment, index) => {
          // Skip the ID segment in the breadcrumb text
          if (index === 1 && validateToken(segment)) return null;

          const href = `/dashboard/${dashboardId}/` + pathSegments.slice(2, index + 1).join("/");

          const isLast = index === pathSegments.length - 1;

          return (
            <Fragment key={segment}>
              <BreadcrumbItem className={isLast ? "" : "hidden md:block"}>
                {isLast ? (
                  <BreadcrumbPage>{segmentNames[segment] || ""}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={href}>{segmentNames[segment] || ""}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default DynamicBreadcrumb;
