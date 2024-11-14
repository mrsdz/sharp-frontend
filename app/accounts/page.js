// api
import getStores from "@/api/dashboard/store/info/getStores";
// components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// views
import Accounts from "@/views/accounts";
import { redirect } from "next/navigation";

export default async function SelectPharmacy() {
  const data = await getStores();

  if (data.results.length === 1) redirect(`/dashboard/${data.results[0].id}`);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-neutral-50 dark:bg-background">
      <div className="min-w-[400px]">
        <Card>
          <CardHeader>
            <CardTitle>سلام اشکان عزیز 👋</CardTitle>
            <CardDescription>برای شروع داروخانه موردنظر رو انتخاب کنید</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              {data.results.length ? (
                <Accounts list={data} />
              ) : (
                <p className="text-base font-normal break-all">
                  متاسفانه شما در حال حاضر در داروخانه حضور ندارید. <br />
                  لطفاً برای پیگیری بیشتر با ادمین سیستم تماس بگیرید.
                </p>
              )}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-background px-2 text-muted-foreground">یا</span>
                </div>
              </div>
              <Button
                variant="ghost"
                className="text-destructive hover:bg-destructive/10 hover:text-destructive transition-colors w-full"
              >
                خروج از حساب کاربری
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
