import { z } from "zod";

import AxiosInstance from "@/api/instance";

const schema = z.object({
  otp: z.string().min(4, "کد باید ۴ رقم داشته باشد"),
});

export default function verifyOtp(formData, phoneNumber) {
  const validatedFields = schema.safeParse({
    otp: formData.get("otp"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  return AxiosInstance.post("/api/staff/otp/verify/", {
    phone_number: phoneNumber.replace(/^0/, "+98"),
    otp: formData.get("otp"),
  });
}
