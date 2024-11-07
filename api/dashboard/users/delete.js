"use client";
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

  console.log(res);

  //   if (res.status === 201) {
  //     revalidatePath("/dashboard/:id/users");
  //     return { status: 201, data: res.data };
  //   }
}
