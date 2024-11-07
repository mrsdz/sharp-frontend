"use server";
import AxiosInstance from "@/api/instance";
// utils
import getToken from "@/utils/getToken";

export default async function getStoreStaffs(id) {
  if (!id) return null;

  return await AxiosInstance.get(`/api/store/${id}/staff/`, {
    headers: { ...(await getToken()) },
    params: { count_per_page: 1 },
    next: { tags: ["store-staff"] },
  }).then(({ data }) => data);
}
