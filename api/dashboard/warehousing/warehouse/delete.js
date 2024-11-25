"use server";
import { revalidatePath } from "next/cache";
// api
import AxiosInstance from "@/api/instance";
// utils
import getToken from "@/auth/get-token";

export default async function deleteWarehouseApi({ storeId, warehouseId }) {
  if (!storeId || !warehouseId) return null;

  const res = await AxiosInstance.delete(`/api/store/${storeId}/section/${warehouseId}/`, {
    headers: { ...(await getToken()) },
  }).catch((e) => console.log(e));

  if (res.status === 204) {
    revalidatePath(`/dashboard/${storeId}/warehousing/warehouse`);
    return { status: 204 };
  }
}
