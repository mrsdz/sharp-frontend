"use client";

import { useState, useTransition } from "react";
import { useRouter, useParams } from "next/navigation";
// api
import editPurchaseDocumentItem from "@/api/dashboard/warehousing/purchase-documents/items/edit";
// views
import Information from "@/views/dashboard/warehousing/purchase-documents/edit/information";
import Factor from "@/views/dashboard/warehousing/purchase-documents/edit/factor";
import Items from "@/views/dashboard/warehousing/purchase-documents/edit/items";
// components
import { Button } from "@/components/ui/button";

export default function EditPurchaseDocument({ initialData, items }) {
  const router = useRouter();
  const { id: storeId, purchase_document_id: purchaseDocumentId } = useParams();

  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState({});

  const [isPending, startTransition] = useTransition();

  const handleDataChange = (id, key, value) => {
    startTransition(() => {
      editPurchaseDocumentItem({ storeId, purchaseDocumentId, id, body: { [key]: value } });
    });
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        <Information data={data} setData={setData} errors={errors} />
        <Factor />
      </div>
      <Items data={items} handleDataChange={handleDataChange} />
      <div className="flex justify-between gap-2">
        <Button onClick={() => router.back()} size="lg" variant="outline">
          بازگشت
        </Button>
        <div className="flex items-center gap-4">
          {isPending ? (
            <div className="flex items-center gap-2 text-sm text-muted-foreground animate-pulse duration-1000">
              <div className="w-2 h-2 bg-yellow-500 rounded-full" />
              در حال ذخیره پیش نویس
            </div>
          ) : (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              پیش نویس دخیره شد
            </div>
          )}
          <Button size="lg">ثبت نهایی</Button>
        </div>
      </div>
    </>
  );
}
