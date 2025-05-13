import { IState } from "@/interfaces/states.interface";
import { create, StoreApi, UseBoundStore } from "zustand";

const useStateStore: UseBoundStore<StoreApi<IState>> = create((set) => ({
  showNav: false,
  setShowNav: (value: boolean) => set({ showNav: value }),
}));

export default useStateStore
