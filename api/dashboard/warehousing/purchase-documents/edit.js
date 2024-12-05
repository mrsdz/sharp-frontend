"use server";

import { revalidateTag } from "next/cache";
// api
import AxiosInstance from "@/api/instance";
// utils
import getToken from "@/auth/get-token";
import jalaliToGregorian from "@/utils/jalali-to-gregorian";

export default async function editPurchaseDocumentApi({ data, storeId, purchaseDocumentId }) {
  const res = await AxiosInstance.patch(
    `/api/store/${storeId}/buy-receipt/${purchaseDocumentId}/`,
    {
      date: jalaliToGregorian(data.date),
      section: data.section?.id || "",
      supplier: data.seller?.id || "",
      description: data.description,
      tracking_code: data.tracking_code,
      total_discount: data.total_discount,
      price_increase: data.price_increase,
      paid_amount: data.paid_amount,
    },
    {
      headers: { ...(await getToken()) },
    }
  );

  if (res.status === 200) {
    revalidateTag(`purchase-document-${purchaseDocumentId}`);
    return { status: 200, data: res.data };
  }
}
