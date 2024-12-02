"use server";
import { revalidateTag } from "next/cache";
// api
import AxiosInstance from "@/api/instance";
// utils
import getToken from "@/auth/get-token";

export default async function deletePurchaseDocumentItem({ storeId, purchaseDocumentId, itemId }) {
  if (!storeId || !purchaseDocumentId) return null;

  const res = await AxiosInstance.delete(
    `/api/store/${storeId}/buy-receipt/${purchaseDocumentId}/items/${itemId}/`,
    {
      headers: { ...(await getToken()) },
    }
  ).catch((e) => console.log(e));

  if (res.status === 204) {
    revalidateTag(`purchase-document-items-${purchaseDocumentId}`);
    return { status: 204 };
  }
}
