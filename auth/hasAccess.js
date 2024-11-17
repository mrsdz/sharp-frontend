// store
import { useAppStore } from "@/store/provider-store";

export default function hasAccess(requiredPermissions) {
  const permissions = useAppStore((state) => state.permissions);

  if (!requiredPermissions || !permissions || !permissions.length) return false;

  return requiredPermissions.every((perm) => permissions.includes(perm));
}
