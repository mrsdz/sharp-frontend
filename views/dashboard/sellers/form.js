"use client";
// hooks
import { useState, useEffect } from "react";
// components
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
// api
import getProvince from "@/api/cms/get-province";
import getCity from "@/api/cms/get-city";

export default function FormSeller({ errors, data, setData }) {
  const [provinceList, setProvinceList] = useState([]);
  const [cityList, setCityList] = useState([]);

  useEffect(() => {
    getProvince().then((data) => setProvinceList(data?.results));
  }, []);

  useEffect(() => {
    if (data.province) {
      getCity(data.province).then((data) => {
        setCityList(data?.results);
      });
    }
  }, [data.province]);

  return (
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="is_company" className="text-right">
          نوع فروشنده
          <span className="text-red-500">*</span>
        </Label>
        <div className="col-span-3">
          <Select
            name="is_company"
            id="is_company"
            error={errors.is_company}
            value={data.is_company ? "true" : "false"}
            onValueChange={(value) => setData("is_company", value === "true")}
          >
            <SelectTrigger value={data.is_company}>
              <SelectValue placeholder="نوع فروشنده انتخاب کنید" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="true">شرکت</SelectItem>
              <SelectItem value="false">همکار</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="customer_type" className="text-right">
          فروشنده
          <span className="text-red-500">*</span>
        </Label>
        <div className="col-span-3">
          <Select
            name="customer_type"
            id="customer_type"
            error={errors.customer_type}
            value={data.customer_type}
            onValueChange={(value) => setData("customer_type", value)}
          >
            <SelectTrigger value={data.customer_type}>
              <SelectValue placeholder="نوع فروشنده انتخاب کنید" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="individual">شخص حقیقی</SelectItem>
              <SelectItem value="private_legal">شخص حقوقی غیر دولتی</SelectItem>
              <SelectItem value="government_legal">شخص حقوقی دولتی</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="company_name" className="text-right">
          {data.customer_type === "individual" ? "نام شخص" : "نام شرکت"}
          <span className="text-red-500">*</span>
        </Label>
        <div className="col-span-3">
          <Input
            name="company_name"
            id="company_name"
            placeholder={`${
              data.customer_type === "individual" ? "نام شخص" : "نام شرکت"
            } را وارد کنید`}
            error={errors.company_name}
            value={data.company_name}
            onChange={(e) => setData("company_name", e.target.value)}
          />
        </div>
      </div>
      {!data.is_company && (
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="customer_type" className="text-right">
            مبادله دارویی
          </Label>
          <div className="col-span-3">
            <Select
              name="type_of_exchange"
              id="type_of_exchange"
              error={errors.type_of_exchange}
              value={data.type_of_exchange}
              onValueChange={(value) => setData("type_of_exchange", value)}
            >
              <SelectTrigger value={data.type_of_exchange}>
                <SelectValue placeholder="مبادله دارویی انتخاب کنید" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="based_on_sell_price">بر اساس قیمت فروش</SelectItem>
                <SelectItem value="based_on_buy_price">بر اساس قیمت خرید</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="national_id" className="text-right">
          {data.customer_type === "individual" ? "کد ملی" : "شناسه ملی"}
        </Label>
        <div className="col-span-3">
          <Input
            mask=""
            format="###########"
            type="pattern_number"
            name="national_id"
            id="national_id"
            placeholder={`${
              data.customer_type === "individual" ? "کد ملی" : "شناسه ملی"
            } را وارد کنید`}
            error={errors.national_id}
            value={data.national_id}
            onChange={(e) => setData("national_id", e.target.value)}
          />
        </div>
      </div>
      {(data.customer_type === "private_legal" || data.customer_type === "government_legal") && (
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="economic_code" className="text-right">
            شماره اقتصادی
          </Label>
          <div className="col-span-3">
            <Input
              mask=""
              format="############"
              type="pattern_number"
              name="economic_code"
              id="economic_code"
              placeholder="شماره اقتصادی را وارد کنید"
              error={errors.economic_code}
              value={data.economic_code}
              onChange={(e) => setData("economic_code", e.target.value)}
            />
          </div>
        </div>
      )}

      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="visitor_name" className="text-right">
          نام ویزیتور
        </Label>
        <div className="col-span-3">
          <Input
            name="visitor_name"
            id="visitor_name"
            placeholder="نام ویزیتور را وارد کنید"
            error={errors.visitor_name}
            value={data.visitor_name}
            onChange={(e) => setData("visitor_name", e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="phone_fax" className="text-right">
          تلفن / فکس
        </Label>
        <div className="col-span-3 grid grid-cols-3 gap-2">
          <Input
            mask=""
            format="####"
            type="pattern_number"
            name="pre_number"
            id="pre_number"
            placeholder="پیش شماره"
            error={errors.pre_number}
            value={data.pre_number}
            onChange={(e) => setData("pre_number", e.target.value)}
          />
          <Input
            mask=""
            format="########"
            type="pattern_number"
            name="phone_fax"
            id="phone_fax"
            placeholder="تلفن / فکس را وارد کنید"
            error={errors.phone_fax}
            value={data.phone_fax}
            onChange={(e) => setData("phone_fax", e.target.value)}
            className="col-span-2"
          />
        </div>
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="province" className="text-right">
          استان
        </Label>
        <div className="col-span-3 flex gap-2">
          <Select
            name="province"
            id="province"
            error={errors.province}
            value={data.province || ""}
            onValueChange={(value) => setData("province", value)}
          >
            <SelectTrigger value={data.province}>
              <SelectValue placeholder="استان انتخاب کنید" />
            </SelectTrigger>
            <SelectContent>
              {provinceList.map((item) => (
                <SelectItem key={item.id} value={item.id}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {data.province && cityList.length > 0 && (
            <Select
              name="city"
              id="city"
              error={errors.city}
              value={data.city || ""}
              onValueChange={(value) => setData("city", value)}
            >
              <SelectTrigger value={data.city}>
                <SelectValue placeholder="شهر انتخاب کنید" />
              </SelectTrigger>
              <SelectContent>
                {cityList.map((item) => (
                  <SelectItem key={item.id} value={item.id}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </div>
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="postal_code" className="text-right">
          کد پستی
        </Label>
        <div className="col-span-3">
          <Input
            mask=""
            format="##########"
            type="pattern_number"
            name="postal_code"
            id="postal_code"
            placeholder="کد پستی را وارد کنید"
            error={errors.postal_code}
            value={data.postal_code}
            onChange={(e) => setData("postal_code", e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="address" className="text-right">
          آدرس
        </Label>
        <div className="col-span-3">
          <Textarea
            name="address"
            id="address"
            placeholder="آدرس را وارد کنید"
            error={errors.address}
            value={data.address}
            onChange={(e) => setData("address", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
