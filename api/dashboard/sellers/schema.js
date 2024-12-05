import { z } from "zod";

const schema = z.object({
  company_name: z.string().min(1, { message: "نام اجباری است" }),
  customer_type: z.string().min(1, { message: "نوع فروشنده اجباری است" }),
  type_of_exchange: z.string(),
  address: z.string(),
  economic_code: z.string(),
  national_id: z.string(),
  phone_fax: z.string(),
  pre_number: z.string(),
  postal_code: z.string(),
  visitor_name: z.string(),
  city: z.number().nullable(),
  is_company: z.boolean(),
});

export default schema;
