"use server";

import { revalidatePath } from "next/cache";
// api
import AxiosInstance from "@/api/instance";
// utils
import getToken from "@/auth/get-token";
import schema from "./schema";

export default async function editUserApi(data, storeId) {
  const validatedFields = schema.safeParse(data);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const res = await AxiosInstance.patch(
    `/api/store/${storeId}/staff/${data.id}/`,
    {
      display_name: data.display_name,
      group: data.group,
      username: data.username,
      is_active: data.is_active,
    },
    {
      headers: { ...(await getToken()) },
    }
  );

  if (res.status === 200) {
    revalidatePath(`/dashboard/${storeId}/staff`);
    return { status: 200, data: res.data };
  }
}
