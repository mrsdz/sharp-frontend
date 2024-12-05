"use server";
import AxiosInstance from "@/api/instance";
// utils
import getToken from "@/auth/get-token";

export default async function getCity(provinceId) {
  return await AxiosInstance.get("/api/common/city/", {
    params: {
      page: 1,
      count_per_page: 100,
      province: provinceId,
    },
    headers: { ...(await getToken()) },
  }).then(({ data }) => data);
}
