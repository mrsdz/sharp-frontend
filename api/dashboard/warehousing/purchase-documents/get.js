"use server";
import AxiosInstance from "@/api/instance";
// utils
import getToken from "@/auth/get-token";

export default async function getPurchaseDocuments({
  id,
  page = 1,
  countPerPage = 10,
  search = null,
  supplierType = "both",
}) {
  if (!id) return null;

  return await AxiosInstance.get(`/api/store/${id}/buy-receipt/`, {
    headers: { ...(await getToken()) },
    params: {
      count_per_page: countPerPage,
      page,
      search,
      supplier_type: supplierType === "both" ? null : supplierType,
    },
  }).then(({ data }) => data);
}
