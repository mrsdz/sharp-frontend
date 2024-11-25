// api
import getStaffs from "@/api/dashboard/staff/get";
// components
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import NewUser from "@/views/dashboard/staff/new";
// views
import ViewUsers from "@/views/dashboard/staff";

export default async function Staff({ params, searchParams }) {
  const id = (await params).id;
  const { page, search, group, countPerPage, isActive } = await searchParams;

  const data = await getStaffs({ id, page, search, group, isActive, countPerPage });

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
        <ViewUsers id={id} data={data} />
      </CardContent>
    </Card>
  );
}
