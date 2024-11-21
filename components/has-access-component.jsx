import hasAccess from "@/auth/has-access";

export default function HasAccessComponent({ component, requiredPermissions }) {
  const access = hasAccess(requiredPermissions);

  return access ? component : null;
}
