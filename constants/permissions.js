// staff
export const ADD_STAFF = "add_user";
export const EDIT_STAFF = "change_staff";
export const DELETE_STAFF = "delete_staff";
export const VIEW_STAFF = "view_staff";
// warehousing / purchase documents
export const ADD_PURCHASE_DOCUMENT = "add_user";
export const EDIT_PURCHASE_DOCUMENT = "change_user";
export const DELETE_PURCHASE_DOCUMENT = "delete_user";
export const VIEW_PURCHASE_DOCUMENT = "view_user";

export const PROTECTED_ROUTES = {
  "/staff": [VIEW_STAFF],
};
