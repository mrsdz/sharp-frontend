"use server";
import AxiosInstance from "@/api/instance";
// utils
import getToken from "@/auth/get-token";

export default async function getUserPermissions({ token, storeId }) {
  return await AxiosInstance.get(`/api/store/${storeId}/staff/permissions/`, {
    headers: { Authorization: `Token ${token}` },
  }).then(({ data }) => data.permissions);
}
