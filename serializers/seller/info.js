export default function serializeSellerInfo(data) {
  return {
    company_name: data.company_name || "",
    address: data.address || "",
    economic_code: data.economic_code || "",
    national_id: data.national_id || "",
    phone_fax: data.phone_fax || "",
    pre_number: data.pre_number || "",
    postal_code: data.postal_code || "",
    visitor_name: data.visitor_name || "",
    customer_type: data.customer_type || "",
    city: data.city || null,
    id: data.id,
    type_of_exchange: data.type_of_exchange || "based_on_sell_price",
    is_company: data.is_company || false,
  };
}
