// api
import getWarehouses from "@/api/dashboard/warehousing/warehouse/get";
// views
import NewWarehouse from "@/views/dashboard/warehousing/warehouse/new";
import ViewWarehouse from "@/views/dashboard/warehousing/warehouse";
// components
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default async function WarehousePage({ params, searchParams }) {
  const id = (await params).id;
  const { page, search, isActive, countPerPage } = await searchParams;

  const data = await getWarehouses({ id, page, search, isActive, countPerPage });

  console.log(data);

  return (
    <Card className="shadow-none">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex flex-col gap-1.5">
          <CardTitle>لیست انبار</CardTitle>
          <CardDescription>
            این صفحه شامل اطلاعات انبار است. شما می‌توانید انبار را مشاهده کرده و در صورت نیاز اقدام
            به ویرایش، حذف یا افزودن انبار جدید کنید.
          </CardDescription>
        </div>
        <NewWarehouse id={id} />
      </CardHeader>
      <CardContent>
        <ViewWarehouse data={data} />
      </CardContent>
    </Card>
  );
}
