// staff
export const ADD_STAFF = "add_user";
export const EDIT_STAFF = "change_staff";
export const DELETE_STAFF = "delete_staff";
export const VIEW_STAFF = "view_staff";

export const PROTECTED_ROUTES = {
  "/users": [VIEW_STAFF],
};
