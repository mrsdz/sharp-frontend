"use client";
import { useState } from "react";
// components
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import HasAccessComponent from "@/components/has-access-component";
import { Edit3, MoreVertical, Trash2Icon } from "lucide-react";
// views
import EditUserDialog from "./edit";
import DeleteUserDialog from "./delete";
import { useAppStore } from "@/store/provider-store";
// constants
import { EDIT_STAFF, DELETE_STAFF } from "@/constants/permissions";

const initialDeleteData = { open: false, id: null };
const initialEditData = {
  open: false,
  data: {
    display_name: "",
    group: "",
    username: "",
    is_active: false,
  },
};

export default function TableUser({ data = { results: [], current_page: 1 }, refetchData }) {
  const userId = useAppStore((state) => state.user.id);
  const [openDeleteUser, setOpenDeleteUser] = useState(initialDeleteData);
  const [openEditUser, setOpenEditUser] = useState(initialEditData);

  return (
    <>
      <DataTable
        columns={[
          { header: "#", cell: ({ row: { index } }) => index + 1 },
          {
            accessorKey: "display_name",
            header: "نام نمایشی",
          },
          {
            accessorKey: "first_name",
            header: "نام",
            cell: ({ row: { original } }) => original.staff.first_name || "-",
          },
          {
            accessorKey: "last_name",
            header: "نام‌خانوادگی",
            cell: ({ row: { original } }) => original.staff.last_name || "-",
          },
          {
            accessorKey: "username",
            header: "شماره همراه",
            cell: ({ row: { original } }) => (
              <span dir="ltr">{original.staff.username?.replace(/^\+98/, "0")}</span>
            ),
          },
          {
            accessorKey: "group",
            header: "سمت",
            cell: ({ getValue }) => getValue()?.name,
          },
          {
            accessorKey: "is_active",
            header: "وضعیت",
            cell: ({ getValue }) => (
              <Badge variant={getValue() ? "success" : "destructive"}>
                {getValue() ? "فعال" : "غیر فعال"}
              </Badge>
            ),
          },
          {
            header: "اقدامات",
            cell: ({ row: { original } }) =>
              original.staff.id !== userId ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost">
                      <MoreVertical width={18} height={18} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <HasAccessComponent
                      component={
                        <DropdownMenuItem
                          onClick={() => setOpenEditUser({ open: true, data: original })}
                        >
                          <Edit3 />
                          ویرایش
                        </DropdownMenuItem>
                      }
                      requiredPermissions={[EDIT_STAFF]}
                    />
                    <HasAccessComponent
                      component={
                        <DropdownMenuItem
                          onClick={() => setOpenDeleteUser({ open: true, id: original.id })}
                          className="text-destructive"
                        >
                          <Trash2Icon />
                          حذف
                        </DropdownMenuItem>
                      }
                      requiredPermissions={[DELETE_STAFF]}
                    />
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <span className="px-4 py-2 text-base">-</span>
              ),
          },
        ]}
        data={data}
        refetchData={refetchData}
      />
      <DeleteUserDialog
        open={openDeleteUser.open}
        id={openDeleteUser.id}
        setOpen={() => setOpenDeleteUser(initialDeleteData)}
      />
      <EditUserDialog
        open={openEditUser.open}
        initialData={openEditUser.data}
        setOpen={() => setOpenEditUser(initialEditData)}
      />
    </>
  );
}
