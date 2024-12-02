// components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import NewItem from "@/views/dashboard/warehousing/purchase-documents/edit/new-item";
// views
import TableAddPurchaseDocument from "@/views/dashboard/warehousing/purchase-documents/edit/table";

export default function Items({ data, handleDataChange }) {
  return (
    <Card className="shadow-none">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>لیست اقلام</CardTitle>
        <NewItem />
      </CardHeader>
      <CardContent>
        <TableAddPurchaseDocument data={data} handleDataChange={handleDataChange} />
      </CardContent>
    </Card>
  );
}
