import AxiosInstance from "@/api/instance";
import getToken from "@/utils/getToken";

export default async function getGroups() {
  return await AxiosInstance.get("/api/staff/group/", { headers: { ...(await getToken()) } }).then(
    ({ data }) => data
  );
}
