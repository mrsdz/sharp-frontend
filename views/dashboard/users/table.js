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

import { Edit3, MoreVertical, Trash2Icon } from "lucide-react";
// views
import EditUserDialog from "./edit";
import DeleteUserDialog from "./delete";

const initialData = { open: false, id: null };

export default function TableUser({ data = { results: [] } }) {
  const [openDeleteUser, setOpenDeleteUser] = useState(initialData);
  const [openEditUser, setOpenEditUser] = useState(false);

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
            cell: ({ row: { original } }) => <span dir="ltr">{original.staff.username}</span>,
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
            cell: ({ row: { original } }) => (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost">
                    <MoreVertical width={18} height={18} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setOpenEditUser(!openEditUser)}>
                    <Edit3 />
                    ویرایش
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setOpenDeleteUser({ open: true, id: original.id })}
                    className="text-destructive"
                  >
                    <Trash2Icon />
                    حذف
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ),
          },
        ]}
        data={data}
      />
      <DeleteUserDialog
        open={openDeleteUser.open}
        id={openDeleteUser.id}
        setOpen={() => setOpenDeleteUser(initialData)}
      />
      <EditUserDialog open={openEditUser} setOpen={setOpenEditUser} />
    </>
  );
}
