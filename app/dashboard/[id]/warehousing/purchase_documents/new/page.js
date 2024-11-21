"use client";

import { useState } from "react";
// components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function AddPurchaseDocument() {
  const [data, setData] = useState({
    serial_number: "",
  });
  const [errors, setErrors] = useState({});

  return (
    <Card className="shadow-none">
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
        </div>
      </CardContent>
    </Card>
  );
}
