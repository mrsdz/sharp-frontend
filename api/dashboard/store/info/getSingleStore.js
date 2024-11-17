"use server";
import AxiosInstance from "@/api/instance";
// utils
import getToken from "@/auth/getToken";

export default async function getSingleStore(id) {
  if (!id) return null;

  return await AxiosInstance.get(`/api/store/info/${id}/`, {
    headers: { ...(await getToken()) },
  }).then(({ data }) => data);
}
