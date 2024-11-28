"use server";
import { redirect } from "next/navigation";
import { z } from "zod";
// api
import AxiosInstance from "@/api/instance";
// utils
import getToken from "@/auth/get-token";
import jalaliToGregorian from "@/utils/jalali-to-gregorian";

const schema = z.object({
  date: z.object(
    {
      year: z.number(),
      month: z.number(),
      day: z.number(),
    },
    { invalid_type_error: "تاریخ را انتخاب کنید" }
  ),
  description: z.string().min(1, { message: "توضیحات را وارد کنید." }),
});

export default async function newPurchaseDocumentApi(data, id) {
  const validatedFields = schema.safeParse(data);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const res = await AxiosInstance.post(
    `/api/store/${id}/buy-receipt/`,
    { ...data, date: jalaliToGregorian(data.date) },
    {
      headers: { ...(await getToken()) },
    }
  );

  if (res.status === 201)
    redirect(`/dashboard/${id}/warehousing/purchase_documents/${res.data.id}`);
}
