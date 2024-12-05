"use server";
// api
import { urls } from "@/api/urls";
// utils
import getToken from "@/auth/get-token";

export default async function getSinglePurchaseDocument({ storeId, purchaseDocumentId }) {
  if (!storeId || !purchaseDocumentId) return null;

  const res = await fetch(urls.purchaseDocuments.single(storeId, purchaseDocumentId), {
    headers: { ...(await getToken()) },
    cache: "no-store",
    next: { tags: [`purchase-document-${purchaseDocumentId}`] },
  });

  return await res.json();
}
