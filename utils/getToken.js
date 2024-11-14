// utils
import { getCookie } from "@/utils/cookies";

export default async function getToken() {
  const { value: token } = await getCookie("token");

  return { Authorization: `Token ${token}` };
}
