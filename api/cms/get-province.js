"use server";
import AxiosInstance from "@/api/instance";
// utils
import getToken from "@/auth/get-token";

export default async function getProvince() {
  return await AxiosInstance.get("/api/common/province/", {
    params: {
      page: 1,
      count_per_page: 100,
    },
    headers: { ...(await getToken()) },
  }).then(({ data }) => data);
}
