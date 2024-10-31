"use client";

import { useState } from "react";
// components
import { Button } from "@/components/ui/button";
// icons
import { Landmark } from "lucide-react";
// views
import dynamic from "next/dynamic";

const PhoneNumber = dynamic(() => import("./phone-number"));
const Otp = dynamic(() => import("./otp"));

export default function LoginView() {
  const [data, setData] = useState({ step: "phoneNumber", phoneNumber: null });

  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[290px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">مدیریت داروخانه</h1>
        <p className="text-sm text-muted-foreground">
          {data.step === "phoneNumber"
            ? "شماره موبایل خود را در کادر زیر وارد کنید"
            : "کد ارسال شده را در کادر زیر وارد کنید"}
        </p>
      </div>
      <div className="grid gap-6">
        {data.step === "phoneNumber" ? (
          <PhoneNumber changeStep={setData} />
        ) : (
          <Otp changeStep={setData} phoneNumber={data.phoneNumber} />
        )}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">یا ادامه دهید با</span>
          </div>
        </div>
        <Button variant="outline" type="button" disabled>
          <Landmark className="mr-2 h-4 w-4" />
          دولت من (به زودی)
        </Button>
      </div>
    </div>
  );
}
