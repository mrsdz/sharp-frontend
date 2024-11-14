"use server";
import AxiosInstance from "@/api/instance";
// utils
import getToken from "@/utils/getToken";

export default async function getStoreStaffs({
  id,
  page = 1,
  isActive = null,
  countPerPage = 10,
  search = null,
  group = null,
}) {
  if (!id) return null;

  return await AxiosInstance.get(`/api/store/${id}/staff/`, {
    headers: { ...(await getToken()) },
    params: { count_per_page: countPerPage, is_active: isActive, page, search, group__in: group },
  }).then(({ data }) => data);
}
