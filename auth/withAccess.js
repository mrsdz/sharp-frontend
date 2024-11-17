import hasAccess from "./hasAccess";

export default function withAccess(Component, requiredPermissions) {
  return (props) => {
    const access = hasAccess(requiredPermissions);

    if (access) return <Component {...props} />;

    return null;
  };
}
