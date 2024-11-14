"use server";
import { revalidatePath } from "next/cache";
// api
import AxiosInstance from "@/api/instance";
// utils
import getToken from "@/utils/getToken";

export default async function deleteUserApi({ storeId, userId }) {
  if (!storeId || !userId) return null;

  const res = await AxiosInstance.delete(`/api/store/${storeId}/staff/${userId}/`, {
    headers: { ...(await getToken()) },
  }).catch((e) => console.log(e));

  if (res.status === 204) {
    revalidatePath("/dashboard/:id/users");
    return { status: 204 };
  }
}
