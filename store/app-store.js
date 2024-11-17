import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const defaultInitState = {
  user: {},
  permissions: [],
};

export const createAppStore = (initState = defaultInitState) => {
  return create(
    persist(
      (set) => ({
        ...initState,
        setUser: (payload) => set(() => ({ user: payload })),
        setLogout: () => set(() => defaultInitState),
        setPermissions: (payload) => set(() => ({ permissions: payload })),
      }),
      {
        name: "sharp-store",
        storage: createJSONStorage(() => localStorage),
      }
    )
  );
};
