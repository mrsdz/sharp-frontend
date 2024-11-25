"use server";
import AxiosInstance from "@/api/instance";
// utils
import getToken from "@/auth/get-token";

export default async function getWarehouses({
  id,
  page = 1,
  isActive = null,
  countPerPage = 10,
  search = null,
}) {
  if (!id) return null;

  return await AxiosInstance.get(`/api/store/${id}/section/`, {
    headers: { ...(await getToken()) },
    params: { count_per_page: countPerPage, is_active: isActive, page, search },
  }).then(({ data }) => data);
}
