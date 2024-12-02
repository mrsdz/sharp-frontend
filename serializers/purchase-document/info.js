import gregorianToJalali from "@/utils/gregorian-to-jalali";

export default function serializePurchaseDocumentInfo(data) {
  const date = gregorianToJalali(data.date).split("-");

  return {
    serial_number: data.serial_number || "",
    date: date ? { year: Number(date[0]), month: Number(date[1]), day: Number(date[2]) } : "",
    tracking_number: data.tracking_number || "",
    seller: data.seller || "",
    seller_name: data.seller_name || "",
    partner_national_code: data.partner_national_code || "",
    default_warehouse: data.default_warehouse || "",
    description: data.description || "",
  };
}
