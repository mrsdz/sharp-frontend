import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const defaultInitState = {
  user: {},
  permissions: [],
  selectedPurchaseDocument: null,
};

export const createAppStore = (initState = defaultInitState) => {
  return create(
    persist(
      (set) => ({
        ...initState,
        setUser: (payload) => set(() => ({ user: payload })),
        setLogout: () => set(() => defaultInitState),
        setPermissions: (payload) => set(() => ({ permissions: payload })),
        setSelectedPurchaseDocument: (payload) =>
          set(() => ({ selectedPurchaseDocument: payload })),
      }),
      {
        name: "sharp-store",
        storage: createJSONStorage(() => localStorage),
      }
    )
  );
};
