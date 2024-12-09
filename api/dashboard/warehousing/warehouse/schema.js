import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, { message: "نام اجباری است" }),
  description: z.string(),
  address: z.string(),
  type: z.string().min(1, { message: "نوع اجباری است" }),
  phone: z.string(),
  is_active: z.boolean(),
  users: z.array(z.object({ id: z.number() })),
});

export default schema;
