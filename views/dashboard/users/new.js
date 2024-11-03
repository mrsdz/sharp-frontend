"use client";

import { useState } from "react";
// components
import { Button } from "@/components/ui/button";
import { DrawerDialog } from "@/components/drawer-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function NewUser() {
  const [openNewUser, setOpenNewUser] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenNewUser(!openNewUser)} size="lg">
        افزودن
      </Button>
      <DrawerDialog
        title="افزودن کاربر"
        description="لطفاً اطلاعات کاربر جدید را وارد کنید."
        open={openNewUser}
        setOpen={setOpenNewUser}
        footer={
          <>
            <Button type="submit">افزودن</Button>
          </>
        }
      >
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              نام
            </Label>
            <Input id="name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="lastName" className="text-right">
              نام خانوادگی
            </Label>
            <Input id="lastName" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="position" className="text-right">
              سمت
            </Label>
            <Input id="position" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="position" className="text-right">
              شماره همراه
            </Label>
            <Input id="position" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4 mt-2">
            <Label htmlFor="position" className="text-right">
              جنسیت
            </Label>
            <RadioGroup className="col-span-3" defaultValue="male">
              <div className="flex flex-row items-center gap-4">
                <div className="flex flex-row gap-2">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male">مرد</Label>
                </div>
                <div className="flex flex-row gap-2">
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female">زن</Label>
                </div>
              </div>
            </RadioGroup>
          </div>
        </div>
      </DrawerDialog>
    </>
  );
}
