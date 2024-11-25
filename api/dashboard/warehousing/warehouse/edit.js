"use server";

import { revalidatePath } from "next/cache";
// api
import AxiosInstance from "@/api/instance";
// utils
import getToken from "@/auth/get-token";
import schema from "./schema";

export default async function editWarehouseApi(data, storeId) {
  const validatedFields = schema.safeParse(data);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const res = await AxiosInstance.patch(
    `/api/store/${storeId}/section/${data.id}/`,
    {
      name: data.name,
      description: data.description,
      address: data.address,
      section_type: data.type,
      is_active: data.is_active,
      users: data.users.length ? data.users.map((user) => user.id) : [],
    },
    {
      headers: { ...(await getToken()) },
    }
  );

  if (res.status === 200) {
    revalidatePath(`/dashboard/${storeId}/warehousing/warehouse`);
    return { status: 200, data: res.data };
  }
}
