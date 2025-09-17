import { AuthState } from "@/interfaces/auth.interface";
import { create } from "zustand";

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (value: boolean) => set({ isAuthenticated: value }),
}));

export default useAuthStore;
