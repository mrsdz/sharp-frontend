import { z } from "zod";

import AxiosInstance from "@/api/instance";

const schema = z.object({
  phone_number: z.string().superRefine((value, ctx) => {
    if (!value) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "شماره موبایل نمی‌تواند خالی باشد",
      });
      return;
    }

    if (!/^09[0-9]{9}$/.test(value)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "شماره موبایل معتبر وارد کنید",
      });
      return;
    }
  }),
});

export default function sendOtp(formData) {
  const validatedFields = schema.safeParse({
    phone_number: formData.get("phone_number"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  return AxiosInstance.post("/api/staff/otp/send/", {
    phone_number: formData.get("phone_number").replace(/^0/, "+98"),
  });
}
