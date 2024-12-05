"use server";

import { revalidatePath } from "next/cache";
// api
import AxiosInstance from "@/api/instance";
// utils
import getToken from "@/auth/get-token";
import schema from "./schema";

export default async function editSellerApi(data, storeId) {
  const validatedFields = schema.safeParse(data);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const res = await AxiosInstance.patch(`/api/store/${storeId}/supplier/${data.id}/`, data, {
    headers: { ...(await getToken()) },
  });

  if (res.status === 200) {
    revalidatePath(`/dashboard/${storeId}/sellers`);
    return { status: 200, data: res.data };
  }
}
