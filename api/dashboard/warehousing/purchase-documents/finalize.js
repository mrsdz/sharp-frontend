"use server";
import { redirect } from "next/navigation";
// api
import AxiosInstance from "@/api/instance";
// utils
import getToken from "@/auth/get-token";

export default async function finalizePurchaseDocumentApi({ storeId, purchaseDocumentId }) {
  const res = await AxiosInstance.post(
    `/api/store/${storeId}/buy-receipt/${purchaseDocumentId}/finalize/`,
    {},
    {
      headers: { ...(await getToken()) },
    }
  );

  if (res.status === 200) redirect(`/dashboard/${storeId}/warehousing/purchase_documents/`);
}
