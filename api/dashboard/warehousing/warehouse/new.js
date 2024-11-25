"use server";
import { revalidatePath } from "next/cache";
// api
import AxiosInstance from "@/api/instance";
import schema from "./schema";
// utils
import getToken from "@/auth/get-token";

export default async function newWarehouseApi(data, id) {
  const validatedFields = schema.safeParse(data);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const res = await AxiosInstance.post(
    `/api/store/${id}/section/`,
    {
      name: data.name,
      description: data.description,
      phone: data.phone,
      address: data.address,
      section_type: data.type,
      is_active: data.is_active,
      users: data.users.length ? data.users.map((user) => user.id) : [],
    },
    {
      headers: { ...(await getToken()) },
    }
  );

  console.log("--------------------------------");
  console.log(res.response);

  if (res.status === 201) {
    revalidatePath(`/dashboard/${id}/warehousing/warehouse`);
    return { status: 201, data: res.data };
  }
}
