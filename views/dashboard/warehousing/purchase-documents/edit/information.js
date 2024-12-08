// components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CustomDatePicker from "@/components/date-picker";
import WarehouseAutoComplete from "@/components/warehouse-autocomplete";
import SellerAutoComplete from "@/components/seller-autocomplete";
// constants
import { supplierType } from "@/constants/supplier-type";

export default function Information({ data, setData }) {
  return (
    <Card className="shadow-none col-span-3">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>مشخصات فاکتور خرید</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <Label htmlFor="date">تاریخ صدور</Label>
            <CustomDatePicker
              selectedDay={data.date}
              setSelectedDay={(date) => setData("date", date)}
              placeholder="تاریخ صدور را وارد کنید"
              id="date"
            />
          </div>
          <div>
            <Label htmlFor="tracking_code" className="text-right">
              شماره پیگیری/فاکتور
            </Label>
            <Input
              name="tracking_code"
              id="tracking_code"
              placeholder="شماره پیگیری/فاکتور را وارد کنید"
              value={data.tracking_code}
              onChange={(e) => setData("tracking_code", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="supplier_type" className="text-right">
              نوع فروشنده
            </Label>
            <Select
              name="supplier_type"
              id="supplier_type"
              value={data.supplier_type}
              onValueChange={(e) => setData("supplier_type", e)}
            >
              <SelectTrigger value={data.supplier_type}>
                <SelectValue placeholder="نوع فروشنده انتخاب کنید" />
              </SelectTrigger>
              <SelectContent side="top">
                {Object.entries(supplierType).map(([key, value]) => (
                  <SelectItem key={key} value={key}>
                    {value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="seller" className="text-right">
              فروشنده
            </Label>
            <SellerAutoComplete
              name="seller"
              id="seller"
              placeholder="فروشنده انتخاب کنید"
              value={data.seller}
              onChange={(e) => setData("seller", e)}
              popupWidth="w-[196px]"
            />
          </div>
          <div>
            <Label htmlFor="section" className="text-right">
              انبار پیش فرض
            </Label>
            <WarehouseAutoComplete
              name="section"
              id="section"
              placeholder="انبار پیش فرض را وارد کنید"
              value={data.section}
              onChange={(e) => setData("section", e)}
              popupWidth="w-[196px]"
            />
          </div>
          <div className="col-span-4">
            <Label htmlFor="description" className="text-right">
              توضیحات
            </Label>
            <Textarea
              name="description"
              id="description"
              placeholder="توضیحات را وارد کنید"
              value={data.description}
              onChange={(e) => setData("description", e.target.value)}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
