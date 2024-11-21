"use server";

import { revalidatePath } from "next/cache";
// api
import AxiosInstance from "@/api/instance";
// utils
import getToken from "@/auth/get-token";
import schema from "./schema";

export default async function editPurchaseDocumentApi(data, id) {
  const validatedFields = schema.safeParse(data);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const res = await AxiosInstance.patch(
    `/api/store/${id}/warehousing/purchase_documents/${data.id}/`,
    {
      // TODO: add fields
    },
    {
      headers: { ...(await getToken()) },
    }
  );

  if (res.status === 200) {
    revalidatePath(`/dashboard/${id}/warehousing/purchase_documents`);
    return { status: 200, data: res.data };
  }
}
