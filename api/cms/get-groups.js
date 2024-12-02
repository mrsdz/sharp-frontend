"use server";

import getToken from "@/auth/get-token";
import { urls } from "@/api/urls";

export default async function getGroups() {
  return await fetch(urls.groups, {
    headers: { ...(await getToken()) },
    cache: "force-cache",
  }).then((res) => res.json());
}
