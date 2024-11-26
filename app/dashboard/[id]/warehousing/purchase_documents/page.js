// components
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// views
import NewPurchaseDocument from "@/views/dashboard/warehousing/purchase-documents/new-button";
import ViewPurchaseDocuments from "@/views/dashboard/warehousing/purchase-documents";
import FactorsItems from "@/views/dashboard/warehousing/factors-items";

const data = {
  results: [
    {
      serial_number: "PO-1403-001",
      tracking_code: "TRK-001-1403",
      date: "1403-01-15",
      total_price: 2500000,
      total_count: 50,
      paid_amount: 2500000,
      tax_amount: 225000,
      total_price_with_tax: 2725000,
      description: "خرید دارو",
      id: 1,
    },
    {
      serial_number: "PO-1403-002",
      tracking_code: "TRK-002-1403",
      date: "1403-01-14",
      total_price: 1800000,
      total_count: 30,
      paid_amount: 1800000,
      tax_amount: 162000,
      total_price_with_tax: 1962000,
      description: "-",
      id: 2,
    },
    {
      serial_number: "PO-1403-003",
      tracking_code: "TRK-003-1403",
      date: "1403-01-13",
      total_price: 3200000,
      total_count: 80,
      paid_amount: 3200000,
      tax_amount: 288000,
      total_price_with_tax: 3488000,
      description: "خرید دارو",
      id: 3,
    },
    {
      serial_number: "PO-1403-004",
      tracking_code: "TRK-004-1403",
      date: "1403-01-12",
      total_price: 950000,
      total_count: 25,
      paid_amount: 950000,
      tax_amount: 85500,
      total_price_with_tax: 1035500,
      description: "خرید ملزومات",
      id: 4,
    },
    {
      serial_number: "PO-1403-005",
      tracking_code: "TRK-005-1403",
      date: "1403-01-11",
      total_price: 4100000,
      total_count: 120,
      paid_amount: 4100000,
      tax_amount: 369000,
      total_price_with_tax: 4469000,
      description: "-",
      id: 5,
    },
    {
      serial_number: "PO-1403-006",
      tracking_code: "TRK-006-1403",
      date: "1403-01-10",
      total_price: 1650000,
      total_count: 45,
      paid_amount: 1650000,
      tax_amount: 148500,
      total_price_with_tax: 1798500,
      description: "خرید دارو",
      id: 6,
    },
    {
      serial_number: "PO-1403-007",
      tracking_code: "TRK-007-1403",
      date: "1403-01-09",
      total_price: 2900000,
      total_count: 70,
      paid_amount: 2900000,
      tax_amount: 261000,
      total_price_with_tax: 3161000,
      description: "-",
      id: 7,
    },
    {
      serial_number: "PO-1403-008",
      tracking_code: "TRK-008-1403",
      date: "1403-01-08",
      total_price: 3500000,
      total_count: 90,
      paid_amount: 3500000,
      tax_amount: 315000,
      total_price_with_tax: 3815000,
      description: "-",
      id: 8,
    },
    {
      serial_number: "PO-1403-009",
      tracking_code: "TRK-009-1403",
      date: "1403-01-07",
      total_price: 1200000,
      total_count: 35,
      paid_amount: 1200000,
      tax_amount: 108000,
      total_price_with_tax: 1308000,
      description: "-",
      id: 9,
    },
    {
      serial_number: "PO-1403-010",
      tracking_code: "TRK-010-1403",
      date: "1403-01-06",
      total_price: 2750000,
      total_count: 65,
      paid_amount: 2750000,
      tax_amount: 247500,
      total_price_with_tax: 2997500,
      description: "-",
      id: 10,
    },
  ],
  current_page: 1,
  count_per_page: 10,
};

export default async function Warehousing({ params }) {
  const id = (await params).id;

  return (
    <>
      <Card className="shadow-none">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex flex-col gap-1.5">
            <CardTitle>لیست اسناد خرید</CardTitle>
            <CardDescription>
              این صفحه شامل اطلاعات اسناد خرید است. شما می‌توانید اسناد خرید را مشاهده کرده و در
              صورت نیاز اقدام به ویرایش، حذف یا افزودن اسناد خرید جدید کنید.
            </CardDescription>
          </div>
          <NewPurchaseDocument id={id} />
        </CardHeader>
        <CardContent>
          <ViewPurchaseDocuments data={data} />
        </CardContent>
      </Card>
      <FactorsItems />
    </>
  );
}
