"use server";
import AxiosInstance from "@/api/instance";
// utils
import getToken from "@/auth/get-token";

export default async function getItems(search) {
  return await AxiosInstance.get("/api/common/item/", {
    params: {
      generic_code: search,
    },
    headers: { ...(await getToken()) },
  }).then(({ data }) => data);
}
