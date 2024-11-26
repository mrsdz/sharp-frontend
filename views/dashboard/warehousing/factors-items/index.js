"use client";
// store
import { useAppStore } from "@/store/provider-store";
// components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// views
import TableFactorsItems from "./table";
// icons
import { X } from "lucide-react";

const data = [
  {
    product_code: "001",
    display_name: "آموکسی‌سیلین ۵۰۰ میلی‌گرم",
    counts: 2,
    prize: 0,
    refunded_counts: 0,
    total_amount: 300000,
    discount_amount: 0,
  },
  {
    product_code: "002",
    display_name: "دیفن‌هیدرامین (شربت ضد سرفه)",
    counts: 1,
    prize: 0,
    refunded_counts: 0,
    total_amount: 80000,
    discount_amount: 5000,
  },
  {
    product_code: "003",
    display_name: "استامینوفن ۳۲۵ میلی‌گرم",
    counts: 3,
    prize: 0,
    refunded_counts: 0,
    total_amount: 90000,
    discount_amount: 10000,
  },
  {
    product_code: "004",
    display_name: "کرم ضد آفتاب SPF 50",
    counts: 200,
    prize: 10,
    refunded_counts: 0,
    total_amount: 250000,
    discount_amount: 15000,
  },
  {
    product_code: "005",
    display_name: "شربت مولتی‌ویتامین کودکان",
    counts: 13,
    prize: 0,
    refunded_counts: 0,
    total_amount: 120000,
    discount_amount: 20000,
  },
  {
    product_code: "006",
    display_name: "بتامتازون (پماد ضد التهاب)",
    counts: 122,
    prize: 0,
    refunded_counts: 0,
    total_amount: 70000,
    discount_amount: 5000,
  },
  {
    product_code: "007",
    display_name: "ویتامین D3 (قرص ۱۰۰۰ واحدی)",
    counts: 131,
    prize: 0,
    refunded_counts: 0,
    total_amount: 60000,
    discount_amount: 10000,
  },
  {
    product_code: "008",
    display_name: "ژل شست‌وشوی صورت (پوست چرب)",
    counts: 500,
    prize: 30,
    refunded_counts: 0,
    total_amount: 180000,
    discount_amount: 20000,
  },
  {
    product_code: "009",
    display_name: "ماسک صورت پزشکی (بسته ۵۰ عددی)",
    counts: 10,
    prize: 0,
    refunded_counts: 0,
    total_amount: 100000,
    discount_amount: 10000,
  },
  {
    product_code: "010",
    display_name: "اشک مصنوعی (قطره چشمی مرطوب‌کننده)",
    counts: 1,
    prize: 0,
    refunded_counts: 0,
    total_amount: 50000,
    discount_amount: 5000,
  },
];

export default function FactorsItems() {
  const { selectedPurchaseDocument, setSelectedPurchaseDocument } = useAppStore((state) => state);

  if (!selectedPurchaseDocument) return null;

  return (
    <Card className="shadow-none">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex flex-col gap-1.5">
          <CardTitle>لیست اقلام فاکتور</CardTitle>
        </div>
        <Button onClick={() => setSelectedPurchaseDocument(null)} variant="destructive" size="icon">
          <X />
        </Button>
      </CardHeader>
      <CardContent>
        <TableFactorsItems data={{ results: data, current_page: 1, count_per_page: 10 }} />
      </CardContent>
    </Card>
  );
}
