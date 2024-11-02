"use client";

// components
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { DeleteIcon, Edit, Edit2, Edit3, MoreVertical, Trash2Icon, TrashIcon } from "lucide-react";

const userColumns = [
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
    header: "شماره تلفن",
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
          <DropdownMenuItem className="text-destructive">
            <Trash2Icon />
            حذف
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export default userColumns;
