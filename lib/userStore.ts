import { create } from "zustand";

type UserState = {
  uid: string | null;
  setUid: (uid: string | null) => void;
};

export const useUserStore = create<UserState>((set) => ({
  uid: null,
  setUid: (uid) => set({ uid }),
}));
