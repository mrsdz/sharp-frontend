"use client";

import { useState } from "react";
// components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import CustomDatePicker from "@/components/date-picker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
// views
import TableAddPurchaseDocument from "@/views/dashboard/warehousing/purchase-documents/edit/table";

const initialItems = {
  id: 1,
  barcode: "",
  product_code: "",
  latin_name: "",
  count: "",
  total_price: "",
  discount_price: "",
  warehouse: "",
  buy_price: "",
  sell_price_with_tax: "",
  sell_price_without_tax: "",
  profit: "",
  profit_percentage: "",
  refundable: "",
  tax: "",
};

export default function AddPurchaseDocument() {
  const [data, setData] = useState({
    serial_number: "",
    date: null,
    tracking_number: "",
    seller: "",
    seller_name: "",
    partner_national_code: "",
    default_warehouse: "",
    description: "",
    items: [initialItems],
  });
  const [errors, setErrors] = useState({});

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        <Card className="shadow-none col-span-3">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>مشخصات فاکتور خرید</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="serial_number" className="text-right">
                  سریال سند
                </Label>
                <Input
                  name="serial_number"
                  id="serial_number"
                  placeholder="سریال سند را وارد کنید"
                  error={errors.serial_number}
                  value={data.serial_number}
                  onChange={(e) => setData("serial_number", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="date">تاریخ صدور</Label>
                <CustomDatePicker
                  selectedDay={data.date}
                  setSelectedDay={(date) => setData({ ...data, date: date })}
                  placeholder="تاریخ صدور را وارد کنید"
                  id="date"
                />
              </div>
              <div>
                <Label htmlFor="tracking_number" className="text-right">
                  شماره پیگیری/فاکتور
                </Label>
                <Input
                  name="tracking_number"
                  id="tracking_number"
                  placeholder="شماره پیگیری/فاکتور را وارد کنید"
                  error={errors.tracking_number}
                  value={data.tracking_number}
                  onChange={(e) => setData("tracking_number", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="seller" className="text-right">
                  فروشنده
                </Label>
                <Select
                  name="seller"
                  id="seller"
                  error={errors.seller}
                  value={data.seller}
                  onValueChange={(value) => setData({ ...data, seller: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="فروشنده انتخاب کنید" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="company">شرکت</SelectItem>
                    <SelectItem value="partner">همکار</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="seller_name" className="text-right">
                  نام فروشنده
                </Label>
                <Input
                  name="seller_name"
                  id="seller_name"
                  placeholder="نام فروشنده را وارد کنید"
                  error={errors.seller_name}
                  value={data.seller_name}
                  onChange={(e) => setData("seller_name", e.target.value)}
                />
              </div>
              {/* <div>
                <Label htmlFor="partner_national_code" className="text-right">
                  کد ملی همکار
                </Label>
                <Input
                  name="part_national_code"
                  id="part_national_code"
                  placeholder="کد ملی همکار را وارد کنید"
                  error={errors.part_national_code}
                  value={data.part_national_code}
                  onChange={(e) => setData("part_national_code", e.target.value)}
                />
              </div> */}
              <div>
                <Label htmlFor="default_warehouse" className="text-right">
                  انبار پیش فرض
                </Label>
                <Input
                  name="default_warehouse"
                  id="default_warehouse"
                  placeholder="انبار پیش فرض را وارد کنید"
                  error={errors.default_warehouse}
                  value={data.default_warehouse}
                  onChange={(e) => setData("default_warehouse", e.target.value)}
                />
              </div>
              <div className="col-span-3">
                <Label htmlFor="description" className="text-right">
                  توضیحات
                </Label>
                <Textarea
                  name="description"
                  id="description"
                  placeholder="توضیحات را وارد کنید"
                  error={errors.description}
                  value={data.description}
                  onChange={(e) => setData("description", e.target.value)}
                />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-none">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>فاکتور</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col">
              <li className="flex justify-between border-b py-2 border-muted text-sm">
                <span className="text-muted-foreground">۱۰٪ مالیات</span>
                <span className="font-bold">100,000</span>
              </li>
              <li className="flex justify-between border-b py-2 border-muted text-sm">
                <span className="text-muted-foreground">تخفیف کلی</span>
                <span className="font-bold">10,000</span>
              </li>
              <li className="flex justify-between border-b py-2 border-muted text-sm">
                <span className="text-muted-foreground">افزایش قیمت</span>
                <span className="font-bold">110,000</span>
              </li>
              <li className="flex justify-between border-b py-2 border-muted text-sm">
                <span className="text-muted-foreground">پرداخت شده</span>
                <span className="font-bold">110,000</span>
              </li>
              <li className="flex justify-between border-b py-2 border-muted text-sm">
                <span className="text-muted-foreground">جمع اقلام</span>
                <span className="font-bold">110,000</span>
              </li>
              <li className="flex justify-between border-b py-2 border-muted text-sm">
                <span className="text-muted-foreground">جمع کل</span>
                <span className="font-bold">110,000</span>
              </li>
              <li className="flex justify-between py-2 text-sm">
                <span className="text-muted-foreground">قابل پرداخت</span>
                <span className="font-bold">110,000</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <Card className="shadow-none">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>لیست اقلام</CardTitle>
          <Button
            onClick={() =>
              setData({
                ...data,
                items: [...data.items, { ...initialItems, id: data.items.length + 1 }],
              })
            }
          >
            افزودن
          </Button>
        </CardHeader>
        <CardContent>
          <TableAddPurchaseDocument
            data={{ results: data.items }}
            onDataChange={(items) => setData({ ...data, items })}
            errors={errors}
          />
        </CardContent>
      </Card>
      <div className="flex justify-between gap-2">
        <Button variant="outline">بازگشت</Button>
        <Button>ثبت</Button>
      </div>
    </>
  );
}
