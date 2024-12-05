import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Factor({ informationData, itemsData, setData }) {
  const tax = itemsData?.reduce((acc, item) => acc + (item.sell_price_with_tax || 0), 0);
  const discount = itemsData?.reduce((acc, item) => acc + (item.discount || 0), 0);
  const totalBuyPrice = itemsData?.reduce((acc, item) => acc + (item.buy_price || 0), 0);
  const totalPrice = itemsData?.reduce((acc, item) => acc + (item.total_price || 0), 0);
  const totalPayment = totalPrice - discount + tax;

  return (
    <Card className="shadow-none">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>فاکتور</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col">
          <li className="flex justify-between border-b py-2 border-muted text-sm">
            <span className="text-muted-foreground">۱۰٪ مالیات</span>
            <span className="font-bold">{tax}</span>
          </li>
          <li className="flex justify-between border-b py-2 border-muted text-sm">
            <span className="text-muted-foreground">تخفیف کلی</span>
            <span className="font-bold">{discount}</span>
          </li>
          <li className="flex justify-between border-b py-2 border-muted text-sm">
            <span className="text-muted-foreground">افزایش قیمت</span>
            <Input
              type="text"
              className="max-w-16 h-5 rounded-sm px-1"
              dir="ltr"
              value={informationData.price_increase}
              onChange={(e) => setData("price_increase", e.target.value)}
            />
          </li>
          <li className="flex justify-between border-b py-2 border-muted text-sm">
            <span className="text-muted-foreground">پرداخت شده</span>
            <Input
              type="text"
              className="max-w-16 h-5 rounded-sm px-1"
              dir="ltr"
              value={informationData.paid_amount}
              onChange={(e) => setData("paid_amount", e.target.value)}
            />
          </li>
          <li className="flex justify-between border-b py-2 border-muted text-sm">
            <span className="text-muted-foreground">جمع اقلام</span>
            <span className="font-bold">{totalBuyPrice}</span>
          </li>
          <li className="flex justify-between border-b py-2 border-muted text-sm">
            <span className="text-muted-foreground">جمع کل</span>
            <span className="font-bold">{totalPrice}</span>
          </li>
          <li className="flex justify-between py-2 text-sm">
            <span className="text-muted-foreground">قابل پرداخت</span>
            <span className="font-bold">{totalPayment}</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
