"use server";

import AxiosInstance from "@/api/instance";
import getToken from "@/auth/getToken";

export default async function getGroups() {
  return await AxiosInstance.get("/api/staff/group/", { headers: { ...(await getToken()) } }).then(
    ({ data }) => data
  );
}
