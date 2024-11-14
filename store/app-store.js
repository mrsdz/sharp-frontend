import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const defaultInitState = {
  user: {},
};

export const createAppStore = (initState = defaultInitState) => {
  return create(
    persist(
      (set) => ({
        ...initState,
        setUser: (payload) => set(() => ({ user: payload })),
      }),
      {
        name: "sharp-store",
        storage: createJSONStorage(() => localStorage),
      }
    )
  );
};
