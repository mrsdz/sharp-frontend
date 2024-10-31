import { z } from "zod";

import AxiosInstance from "../instance";

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

  return AxiosInstance.post("/api/user/otp/verify/", {
    phone_number: phoneNumber,
    otp: formData.get("otp"),
  });
}
