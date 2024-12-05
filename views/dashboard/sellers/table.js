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
import EditSellerDialog from "./edit";
import DeleteSellerDialog from "./delete";
// constants
import { EDIT_SELLER, DELETE_SELLER } from "@/constants/permissions";
import { customerType } from "@/constants/customer-type";
import { typeOfExchange } from "@/constants/type-of-exchange";

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

export default function TableSeller({ data = { results: [], current_page: 1 }, refetchData }) {
  const [openDeleteSeller, setOpenDeleteSeller] = useState(initialDeleteData);
  const [openEditSeller, setOpenEditSeller] = useState(initialEditData);

  return (
    <>
      <DataTable
        columns={[
          { header: "#", cell: ({ row: { index } }) => index + 1 },
          {
            accessorKey: "is_company",
            header: "نوع فروشنده",
            cell: ({ row: { original } }) => (
              <Badge variant="secondary">{original.is_company ? "شرکت" : "همکار"}</Badge>
            ),
          },
          {
            accessorKey: "customer_type",
            header: "فروشنده",
            cell: ({ row: { original } }) => (
              <Badge variant="secondary">{customerType[original.customer_type]}</Badge>
            ),
          },

          {
            accessorKey: "company_name",
            header: "نام",
            cell: ({ getValue }) => getValue() || "-",
          },
          {
            accessorKey: "national_id",
            header: "کد/شناسه ملی",
            cell: ({ getValue }) => getValue() || "-",
          },
          {
            accessorKey: "type_of_exchange",
            header: "مبادله دارویی",
            cell: ({ getValue }) => typeOfExchange[getValue()] || "-",
          },
          {
            accessorKey: "economic_code",
            header: "شماره اقتصادی",
            cell: ({ getValue }) => getValue() || "-",
          },
          {
            accessorKey: "phone_fax",
            header: "تلفن/فکس",
            cell: ({ getValue }) => getValue() || "-",
          },
          {
            accessorKey: "address",
            header: "آدرس",
            cell: ({ getValue }) => getValue() || "-",
          },
          {
            accessorKey: "province",
            header: "استان",
            cell: ({ getValue }) => getValue()?.name || "-",
          },
          {
            accessorKey: "city",
            header: "شهر",
            cell: ({ getValue }) => getValue()?.name || "-",
          },
          {
            accessorKey: "postal_code",
            header: "کد پستی",
            cell: ({ getValue }) => getValue() || "-",
          },
          {
            accessorKey: "visitor_name",
            header: "نام ویزیتور",
            cell: ({ getValue }) => getValue() || "-",
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
                        onClick={() => setOpenEditSeller({ open: true, data: original })}
                      >
                        <Edit3 />
                        ویرایش
                      </DropdownMenuItem>
                    }
                    requiredPermissions={[EDIT_SELLER]}
                  />
                  <HasAccessComponent
                    component={
                      <DropdownMenuItem
                        onClick={() => setOpenDeleteSeller({ open: true, id: original.id })}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2Icon />
                        حذف
                      </DropdownMenuItem>
                    }
                    requiredPermissions={[DELETE_SELLER]}
                  />
                </DropdownMenuContent>
              </DropdownMenu>
            ),
          },
        ]}
        data={data}
        refetchData={refetchData}
      />
      <DeleteSellerDialog
        open={openDeleteSeller.open}
        id={openDeleteSeller.id}
        setOpen={() => setOpenDeleteSeller(initialDeleteData)}
      />
      <EditSellerDialog
        open={openEditSeller.open}
        initialData={openEditSeller.data}
        setOpen={() => setOpenEditSeller(initialEditData)}
      />
    </>
  );
}
