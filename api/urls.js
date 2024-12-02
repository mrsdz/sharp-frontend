const baseUrl = process.env.NEXT_PUBLIC_BACK_END_URL;

export const urls = {
  groups: `${baseUrl}/api/staff/group/`,
  purchaseDocuments: {
    list: (storeId) => `${baseUrl}/api/store/${storeId}/buy-receipt/`,
    single: (storeId, purchaseDocumentId) =>
      `${baseUrl}/api/store/${storeId}/buy-receipt/${purchaseDocumentId}/`,
  },
  items: {
    list: ({ storeId, purchaseDocumentId }) =>
      `${baseUrl}/api/store/${storeId}/buy-receipt/${purchaseDocumentId}/items/?ordering=id,order`,
  },
};
