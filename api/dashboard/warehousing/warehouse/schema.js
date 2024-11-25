import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, { message: "نام اجباری است" }),
  description: z.string().min(1, { message: "توضیحات اجباری است" }),
  address: z.string().min(1, { message: "آدرس اجباری است" }),
  type: z.string().min(1, { message: "نوع اجباری است" }),
  phone: z.string().superRefine((value, ctx) => {
    if (!value) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "شماره تلفن نمی‌تواند خالی باشد",
      });
      return;
    }

    if (!/^021[0-9]{8}$/.test(value)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "شماره تلفن معتبر وارد کنید",
      });
      return;
    }
  }),
  is_active: z.boolean(),
  users: z.array(z.object({ id: z.number() })),
});

export default schema;
