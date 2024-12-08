"use client";
// store
import { useAppStore } from "@/store/provider-store";
// components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// views
import TableFactorsItems from "./table";
// icons
import { X } from "lucide-react";

export default function FactorsItems() {
  const { selectedPurchaseDocument, setSelectedPurchaseDocument } = useAppStore((state) => state);

  if (!selectedPurchaseDocument) return null;

  return (
    <Card className="shadow-none">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex flex-col gap-1.5">
          <CardTitle>لیست اقلام فاکتور {selectedPurchaseDocument.factor_id}</CardTitle>
        </div>
        <Button onClick={() => setSelectedPurchaseDocument(null)} variant="destructive" size="icon">
          <X />
        </Button>
      </CardHeader>
      <CardContent>
        <TableFactorsItems data={{ results: selectedPurchaseDocument.items }} />
      </CardContent>
    </Card>
  );
}
