import { z } from "zod";

const schema = z.object({
  display_name: z.string().min(1, { message: "نام نمایشی اجباری است" }),
  group: z.number().min(1, { message: "سمت اجباری است" }),
  username: z.string().superRefine((value, ctx) => {
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

export default schema;
