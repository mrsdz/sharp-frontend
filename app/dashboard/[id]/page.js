import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import { LineChartSection } from "@/views/dashboard/home/lineChart";
import { PieChartSection } from "@/views/dashboard/home/pieChart";

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-2">
        <div className="grid gap-4 grid-cols-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between space-y-0 pb-2">
                <p className="text-sm font-medium text-muted-foreground">درآمد کل</p>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="space-y-1">
                <h2 className="text-2xl font-bold tracking-tight">425,764,413 تومان</h2>
                <p className="text-xs text-muted-foreground">+%20.1 از ماه قبل</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between space-y-0 pb-2">
                <p className="text-sm font-medium text-muted-foreground">مشتریان</p>
                <Users className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="space-y-1">
                <h2 className="text-2xl font-bold tracking-tight">+2350</h2>
                <p className="text-xs text-muted-foreground">+180.1% از ماه قبل</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between space-y-0 pb-2">
                <p className="text-sm font-medium text-muted-foreground">خریدها</p>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="space-y-1">
                <h2 className="text-2xl font-bold tracking-tight">+123</h2>
                <p className="text-xs text-muted-foreground">+19% از ماه قبل</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between space-y-0 pb-2">
                <p className="text-sm font-medium text-muted-foreground">نسخه‌های ثبت شده</p>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="space-y-1">
                <h2 className="text-2xl font-bold tracking-tight">+573</h2>
                <p className="text-xs text-muted-foreground">+201 در ساعت گذشته</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <LineChartSection />
      <PieChartSection />
    </div>
  );
}
