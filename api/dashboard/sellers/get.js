"use server";
import AxiosInstance from "@/api/instance";
// utils
import getToken from "@/auth/get-token";

export default async function getSellersApi({
  id,
  page = 1,
  countPerPage = 10,
  search = null,
}) {
  if (!id) return null;

  return await AxiosInstance.get(`/api/store/${id}/supplier/`, {
    headers: { ...(await getToken()) },
    params: { count_per_page: countPerPage, page, search },
  }).then(({ data }) => data);
}
