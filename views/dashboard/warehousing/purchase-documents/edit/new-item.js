import { useState } from "react";
import { useParams } from "next/navigation";
// api
import newPurchaseDocumentItemApi from "@/api/dashboard/warehousing/purchase-documents/items/new";
// components
import { Button } from "@/components/ui/button";
import { CommandDialog } from "@/components/ui/command";
import ItemSearch from "@/components/item-search";

export default function NewItem() {
  const { id: storeId, purchase_document_id: purchaseDocumentId } = useParams();

  const [openNewItem, setOpenNewItem] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenNewItem(true)}>افزودن</Button>
      <CommandDialog open={openNewItem} onOpenChange={setOpenNewItem}>
        <ItemSearch
          onChange={(value) =>
            newPurchaseDocumentItemApi({
              storeId,
              purchaseDocumentId,
              count: 1,
              total_price: value.sell_price,
              buy_price: value.buy_price,
              sell_price: value.sell_price,
              item: value.id,
            })
          }
          setState={setOpenNewItem}
        />
      </CommandDialog>
    </>
  );
}
