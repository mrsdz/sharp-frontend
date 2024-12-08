"use server";
import { revalidatePath } from "next/cache";
// api
import AxiosInstance from "@/api/instance";
import schema from "./schema";
// utils
import getToken from "@/auth/get-token";

export default async function newUserApi(data, storeId) {
  const validatedFields = schema.safeParse(data);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const res = await AxiosInstance.post(`/api/store/${storeId}/staff/`, data, {
    headers: { ...(await getToken()) },
  });

  if (res.status === 201) {
    revalidatePath(`/dashboard/${storeId}/staff`);
    return { status: 201, data: res.data };
  }
}
