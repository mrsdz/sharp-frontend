export default function serializeWarehouseType(data) {
  if (data === "losses") return "ضایعات";
  if (data === "products") return "محصولات";
  if (data === "semi-built") return "نیمه‌ساخته";
  if (data === "other") return "دیگر";
}
