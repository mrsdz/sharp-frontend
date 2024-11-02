// components
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
// views
import userColumns from "@/views/dashboard/users/columns";
import { Input } from "@/components/ui/input";

export default function Users() {
  return (
    <div>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex flex-col gap-1">
            <CardTitle>لیست کاربران</CardTitle>
            <CardDescription>
              این صفحه شامل اطلاعات کاربران سیستم است. شما می‌توانید کاربران را مشاهده کرده و در
              صورت نیاز اقدام به ویرایش، حذف یا افزودن کاربر جدید کنید.
            </CardDescription>
          </div>
          <Button size="lg">افزودن</Button>
        </CardHeader>
        <CardContent>
          <div className="flex mb-4">
            <Input placeholder="جستجو کاربران..." className="w-fit" />
          </div>
          <DataTable
            columns={userColumns}
            data={[
              {
                id: "728ed52f",
                name: "اشکان",
                last_name: "دهباشی",
                position: "صندوق دار",
                phone_number: "09380277445",
                gender: "مرد",
              },
            ]}
          />
        </CardContent>
      </Card>
    </div>
  );
}
