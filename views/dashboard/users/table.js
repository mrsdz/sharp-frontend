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
import ConfirmDialog from "@/components/confirm-dialog";
import { Edit3, MoreVertical, Trash2Icon } from "lucide-react";

export default function TableUser() {
  const [openDeleteUser, setOpenDeleteUser] = useState(false);

  console.log(openDeleteUser);

  return (
    <>
      <DataTable
        columns={[
          {
            accessorKey: "name",
            header: "نام",
          },
          {
            accessorKey: "last_name",
            header: "نام خانوادگی",
          },
          {
            accessorKey: "position",
            header: "سمت",
          },
          {
            accessorKey: "phone_number",
            header: "شماره همراه",
          },
          {
            accessorKey: "gender",
            header: "جنسیت",
          },
          {
            header: "اقدامات",
            cell: ({ getValue }) => (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost">
                    <MoreVertical width={18} height={18} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Edit3 />
                    ویرایش
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setOpenDeleteUser(!openDeleteUser)}
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
        data={[
          {
            id: "728ed52f",
            name: "اشکان",
            last_name: "دهباشی",
            position: "صندوق دار",
            phone_number: "09380277445",
            gender: "مرد",
          },
          {
            id: "728ed52f",
            name: "اشکان",
            last_name: "دهباشی",
            position: "صندوق دار",
            phone_number: "09380277445",
            gender: "مرد",
          },
          {
            id: "728ed52f",
            name: "اشکان",
            last_name: "دهباشی",
            position: "صندوق دار",
            phone_number: "09380277445",
            gender: "مرد",
          },
          {
            id: "728ed52f",
            name: "اشکان",
            last_name: "دهباشی",
            position: "صندوق دار",
            phone_number: "09380277445",
            gender: "مرد",
          },
        ]}
      />
      <ConfirmDialog name="کاربر" open={openDeleteUser} setOpen={setOpenDeleteUser} />
    </>
  );
}
