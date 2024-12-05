import EditPurchaseDocument from "@/views/dashboard/warehousing/purchase-documents/edit";
// api
import getSinglePurchaseDocument from "@/api/dashboard/warehousing/purchase-documents/get-single";
import getPurchaseDocumentItems from "@/api/dashboard/warehousing/purchase-documents/items/get-items";
// serializers
import serializePurchaseDocumentInfo from "@/serializers/purchase-document/info";

export default async function AddPurchaseDocument({ params }) {
  const id = (await params).id;
  const purchase_document_id = (await params).purchase_document_id;

  const data = await getSinglePurchaseDocument({
    storeId: id,
    purchaseDocumentId: purchase_document_id,
  });

  const items = await getPurchaseDocumentItems({
    storeId: id,
    purchaseDocumentId: purchase_document_id,
  });

  return (
    <EditPurchaseDocument
      initialInformationData={serializePurchaseDocumentInfo(data)}
      itemsData={items}
    />
  );
}
