// components
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import NewUser from "@/views/dashboard/users/new";
// views
import TableUser from "@/views/dashboard/users/table";
import { Input } from "@/components/ui/input";

export default function Users() {
  return (
    <Card className="shadow-none">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex flex-col gap-1.5">
          <CardTitle>لیست کاربران</CardTitle>
          <CardDescription>
            این صفحه شامل اطلاعات کاربران سیستم است. شما می‌توانید کاربران را مشاهده کرده و در صورت
            نیاز اقدام به ویرایش، حذف یا افزودن کاربر جدید کنید.
          </CardDescription>
        </div>
        <NewUser />
      </CardHeader>
      <CardContent>
        <div className="flex mb-4">
          <Input placeholder="جستجو کاربران..." className="w-fit" />
        </div>
        <TableUser />
      </CardContent>
    </Card>
  );
}
