"use server";
import AxiosInstance from "@/api/instance";

export default async function getUserInfo() {
  return await AxiosInstance.get("/api/user/profi/").then(({ data }) => data);
}
