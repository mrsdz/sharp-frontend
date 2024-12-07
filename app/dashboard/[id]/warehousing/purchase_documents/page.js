// components
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// api
import getPurchaseDocuments from "@/api/dashboard/warehousing/purchase-documents/get";
// views
import NewPurchaseDocument from "@/views/dashboard/warehousing/purchase-documents/new";
import ViewPurchaseDocuments from "@/views/dashboard/warehousing/purchase-documents";
import FactorsItems from "@/views/dashboard/warehousing/purchase-documents/factors-items";

export default async function Warehousing({ params, searchParams }) {
  const id = (await params).id;
  const { page, search } = await searchParams;

  const data = await getPurchaseDocuments({ id, page, search });

  return (
    <>
      <Card className="shadow-none">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex flex-col gap-1.5">
            <CardTitle>لیست اسناد خرید</CardTitle>
            <CardDescription>
              این صفحه شامل اطلاعات اسناد خرید است. شما می‌توانید اسناد خرید را مشاهده کرده و در
              صورت نیاز اقدام به ویرایش، حذف یا افزودن اسناد خرید جدید کنید.
            </CardDescription>
          </div>
          <NewPurchaseDocument id={id} />
        </CardHeader>
        <CardContent>
          <ViewPurchaseDocuments data={data} />
        </CardContent>
      </Card>
      <FactorsItems />
    </>
  );
}
