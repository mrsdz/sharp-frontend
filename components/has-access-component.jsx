import hasAccess from "@/auth/hasAccess";

export default function HasAccessComponent({ component, requiredPermissions }) {
  const access = hasAccess(requiredPermissions);

  return access ? component : null;
}
