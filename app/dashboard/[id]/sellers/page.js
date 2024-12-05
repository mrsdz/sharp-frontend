// api
import getSellers from "@/api/dashboard/sellers/get";
// components
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import NewUser from "@/views/dashboard/sellers/new";
// views
import ViewSellers from "@/views/dashboard/sellers";

export default async function Sellers({ params }) {
  const id = (await params).id;
  // const { page, search, countPerPage } = await searchParams;

  const data = await getSellers({ id });

  return (
    <Card className="shadow-none">
      <CardHeader className="flex flex-col items-center justify-between gap-1.5 md:flex-row">
        <div className="flex flex-col gap-1.5">
          <CardTitle>لیست فروشندگان</CardTitle>
          <CardDescription>
            این صفحه شامل اطلاعات فروشندگان سیستم است. شما می‌توانید فروشندگان را مشاهده کرده و در
            صورت نیاز اقدام به ویرایش، حذف یا افزودن فروشنده جدید کنید.
          </CardDescription>
        </div>
        <NewUser />
      </CardHeader>
      <CardContent>
        <ViewSellers id={id} data={data} />
      </CardContent>
    </Card>
  );
}
