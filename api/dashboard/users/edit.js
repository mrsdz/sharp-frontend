import AxiosInstance from "@/api/instance";
import schema from "./schema";

export default function editUserApi(data) {
  const validatedFields = schema.safeParse(data);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  return AxiosInstance.patch("/", data);
}
