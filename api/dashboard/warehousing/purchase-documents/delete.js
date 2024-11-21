"use server";
import { revalidatePath } from "next/cache";
// api
import AxiosInstance from "@/api/instance";
// utils
import getToken from "@/auth/get-token";

export default async function deletePurchaseDocumentApi({ storeId, purchaseDocumentId }) {
  if (!storeId || !purchaseDocumentId) return null;

  const res = await AxiosInstance.delete(
    `/api/store/${storeId}/warehousing/purchase_documents/${purchaseDocumentId}/`,
    {
      headers: { ...(await getToken()) },
    }
  ).catch((e) => console.log(e));

  if (res.status === 204) {
    revalidatePath(`/dashboard/${storeId}/warehousing/purchase_documents`);
    return { status: 204 };
  }
}
