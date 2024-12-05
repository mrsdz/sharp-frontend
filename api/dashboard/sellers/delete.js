"use server";
import { revalidatePath } from "next/cache";
// api
import AxiosInstance from "@/api/instance";
// utils
import getToken from "@/auth/get-token";

export default async function deleteSellerApi({ storeId, sellerId }) {
  if (!storeId || !sellerId) return null;

  const res = await AxiosInstance.delete(`/api/store/${storeId}/supplier/${sellerId}/`, {
    headers: { ...(await getToken()) },
  }).catch((e) => console.log(e));

  if (res.status === 204) {
    revalidatePath(`/dashboard/${storeId}/sellers`);
    return { status: 204 };
  }
}
