// staff
export const ADD_STAFF = "add_user";
export const EDIT_STAFF = "change_staff";
export const DELETE_STAFF = "delete_staff";
export const VIEW_STAFF = "view_staff";
// sellers
export const ADD_SELLER = "add_user";
export const EDIT_SELLER = "change_user";
export const DELETE_SELLER = "delete_user";
export const VIEW_SELLER = "view_user";
// warehousing
// purchase documents
export const ADD_PURCHASE_DOCUMENT = "add_user";
export const EDIT_PURCHASE_DOCUMENT = "change_user";
export const DELETE_PURCHASE_DOCUMENT = "delete_user";
export const VIEW_PURCHASE_DOCUMENT = "view_user";
// warehouse
export const ADD_WAREHOUSE = "add_user";
export const EDIT_WAREHOUSE = "change_user";
export const DELETE_WAREHOUSE = "delete_user";
export const VIEW_WAREHOUSE = "view_user";

export const PROTECTED_ROUTES = {
  "/staff": [VIEW_STAFF],
  "/sellers": [VIEW_SELLER],
  "/warehousing/purchase-documents": [VIEW_PURCHASE_DOCUMENT],
  "/warehousing/warehouse": [VIEW_WAREHOUSE],
};
