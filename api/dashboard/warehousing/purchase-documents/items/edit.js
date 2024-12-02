"use server";

import { revalidateTag } from "next/cache";
// api
import AxiosInstance from "@/api/instance";
// utils
import getToken from "@/auth/get-token";

export default async function editPurchaseDocumentItem({
  storeId,
  purchaseDocumentId,
  id,
  body,
}) {
  const res = await AxiosInstance.patch(
    `/api/store/${storeId}/buy-receipt/${purchaseDocumentId}/items/${id}/`,
    {
      ...body,
    },
    {
      headers: { ...(await getToken()) },
    }
  );

  if (res.status === 200) {
    revalidateTag(`purchase-document-items-${purchaseDocumentId}`);
    return { status: 200, data: res.data };
  }
}
