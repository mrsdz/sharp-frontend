"use server";
import { revalidatePath } from "next/cache";
// api
import AxiosInstance from "@/api/instance";
import schema from "./schema";
// utils
import getToken from "@/utils/getToken";

export default async function newUserApi(data, id) {
  const validatedFields = schema.safeParse(data);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const res = await AxiosInstance.post(`/api/store/${id}/staff/`, data, {
    headers: { ...(await getToken()) },
  });

  if (res.status === 201) {
    revalidatePath("/dashboard/:id/users");
    return { status: 201, data: res.data };
  }
}
