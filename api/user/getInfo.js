"use server";
import AxiosInstance from "@/api/instance";
// utils
import getToken from "@/utils/getToken";

export default async function getUserInfo() {
  return await AxiosInstance.get("/api/staff/info/", { headers: { ...(await getToken()) } }).then(
    ({ data }) => data
  );
}