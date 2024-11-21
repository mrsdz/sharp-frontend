export default function serializeStaffInfo(data) {
  return {
    display_name: data.display_name || "",
    group: data?.group?.id || "",
    username: data?.staff?.username || "",
    id: data.id || "",
    is_active: data?.is_active || false,
  };
}
