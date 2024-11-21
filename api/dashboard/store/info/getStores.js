"use server";
import AxiosInstance from "@/api/instance";
// utils
import getToken from "@/auth/get-token";

export default async function getStores() {
  return await AxiosInstance.get("/api/store/info/", {
    headers: { ...(await getToken()) },
  }).then(({ data }) => data);
}
