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
import EditWarehouseDialog from "./edit";
import DeleteWarehouseDialog from "./delete";
// constants
import { EDIT_WAREHOUSE, DELETE_WAREHOUSE } from "@/constants/permissions";
// serializers
import serializeWarehouseType from "@/serializers/warehouse/type";

const initialDeleteData = { open: false, id: null };
const initialEditData = {
  open: false,
  data: {
    name: "",
    description: "",
    phone: "",
    address: "",
    type: "",
    is_active: false,
    users: [],
  },
};

export default function TableWarehouse({ data = { results: [], current_page: 1 }, refetchData }) {
  const [openDeleteWarehouse, setOpenDeleteWarehouse] = useState(initialDeleteData);
  const [openEditWarehouse, setOpenEditWarehouse] = useState(initialEditData);

  return (
    <>
      <DataTable
        columns={[
          { header: "#", cell: ({ row: { index } }) => index + 1 },
          {
            accessorKey: "name",
            header: "نام",
          },
          {
            accessorKey: "description",
            header: "توضیحات",
            cell: ({ row: { original } }) => original.description || "-",
          },
          {
            accessorKey: "address",
            header: "آدرس",
            cell: ({ row: { original } }) => original.address || "-",
          },
          {
            accessorKey: "phone",
            header: "شماره تلفن",
            cell: ({ row: { original } }) => (
              <span dir="ltr">{original.phone?.replace(/^\+98/, "0")}</span>
            ),
          },
          {
            accessorKey: "section_type",
            header: "نوع",
            cell: ({ getValue }) => (
              <Badge variant="secondary">{serializeWarehouseType(getValue())}</Badge>
            ),
          },
          {
            accessorKey: "users",
            header: "کاربران",
            cell: ({ getValue }) =>
              getValue().length
                ? getValue().map((user) => (
                    <Badge className="mx-0.5" key={user.id} variant="secondary">
                      {user.display_name}
                    </Badge>
                  ))
                : "-",
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
                  <HasAccessComponent
                    component={
                      <DropdownMenuItem
                        onClick={() => setOpenEditWarehouse({ open: true, data: original })}
                      >
                        <Edit3 />
                        ویرایش
                      </DropdownMenuItem>
                    }
                    requiredPermissions={[EDIT_WAREHOUSE]}
                  />
                  <HasAccessComponent
                    component={
                      <DropdownMenuItem
                        onClick={() => setOpenDeleteWarehouse({ open: true, id: original.id })}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2Icon />
                        حذف
                      </DropdownMenuItem>
                    }
                    requiredPermissions={[DELETE_WAREHOUSE]}
                  />
                </DropdownMenuContent>
              </DropdownMenu>
            ),
          },
        ]}
        data={data}
        refetchData={refetchData}
      />
      <DeleteWarehouseDialog
        open={openDeleteWarehouse.open}
        id={openDeleteWarehouse.id}
        setOpen={() => setOpenDeleteWarehouse(initialDeleteData)}
      />
      <EditWarehouseDialog
        open={openEditWarehouse.open}
        initialData={openEditWarehouse.data}
        setOpen={() => setOpenEditWarehouse(initialEditData)}
      />
    </>
  );
}
