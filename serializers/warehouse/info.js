export default function serializeWarehouseInfo(data) {
  return {
    name: data.name || "",
    description: data.description || "",
    address: data.address || "",
    type: data.section_type || "",
    phone: data.phone || "",
    is_active: data?.is_active || false,
    id: data.id,
    users: data.users || [],
  };
}
