import gregorianToJalali from "@/utils/gregorian-to-jalali";

export default function serializePurchaseDocumentInfo(data) {
  const date = gregorianToJalali(data.date).split("-");

  return {
    date: date ? { year: Number(date[0]), month: Number(date[1]), day: Number(date[2]) } : "",
    tracking_code: data.tracking_code || "",
    seller: data.supplier || "",
    section: data.section || "",
    description: data.description || "",
    is_draft: data.is_draft,
    paid_amount: data.paid_amount || 0,
    price_increase: data.price_increase || "",
    supplier_type: data.supplier_type || "",
    total_discount: data.total_discount || 0,
  };
}
