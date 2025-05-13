import { AuthState } from "@/interfaces/auth.interface";
import { create, StoreApi, UseBoundStore } from "zustand";

const useAuthStore: UseBoundStore<StoreApi<AuthState>> = create((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (value: boolean) => set({ isAuthenticated: value }),
}));

export default useAuthStore;
