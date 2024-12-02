"use server";
// api
import AxiosInstance from "@/api/instance";
// utils
import getToken from "@/auth/get-token";
import { revalidatePath } from "next/cache";

export default async function newPurchaseDocumentItemApi({ storeId, purchaseDocumentId, ...data }) {
  const res = await AxiosInstance.post(
    `/api/store/${storeId}/buy-receipt/${purchaseDocumentId}/items/`,
    { ...data },
    {
      headers: { ...(await getToken()) },
    }
  );

  if (res.status === 201) {
    revalidatePath(`/dashboard/${storeId}/warehousing/purchase_documents/${purchaseDocumentId}`);
    return { status: 201 };
  }
}
