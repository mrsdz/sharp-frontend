import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Factor() {
  return (
    <Card className="shadow-none">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>فاکتور</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col">
          <li className="flex justify-between border-b py-2 border-muted text-sm">
            <span className="text-muted-foreground">۱۰٪ مالیات</span>
            <span className="font-bold">100,000</span>
          </li>
          <li className="flex justify-between border-b py-2 border-muted text-sm">
            <span className="text-muted-foreground">تخفیف کلی</span>
            <span className="font-bold">10,000</span>
          </li>
          <li className="flex justify-between border-b py-2 border-muted text-sm">
            <span className="text-muted-foreground">افزایش قیمت</span>
            <span className="font-bold">110,000</span>
          </li>
          <li className="flex justify-between border-b py-2 border-muted text-sm">
            <span className="text-muted-foreground">پرداخت شده</span>
            <span className="font-bold">110,000</span>
          </li>
          <li className="flex justify-between border-b py-2 border-muted text-sm">
            <span className="text-muted-foreground">جمع اقلام</span>
            <span className="font-bold">110,000</span>
          </li>
          <li className="flex justify-between border-b py-2 border-muted text-sm">
            <span className="text-muted-foreground">جمع کل</span>
            <span className="font-bold">110,000</span>
          </li>
          <li className="flex justify-between py-2 text-sm">
            <span className="text-muted-foreground">قابل پرداخت</span>
            <span className="font-bold">110,000</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
