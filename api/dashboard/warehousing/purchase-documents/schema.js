import { z } from "zod";

const schema = z.object({
  serial_number: z.string().min(1),
});

export default schema;
