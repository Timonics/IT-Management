import { Theme } from "@/interfaces/theme.interface";
import { create, StoreApi, UseBoundStore } from "zustand";

const useThemeStore: UseBoundStore<StoreApi<Theme>> = create((set) => ({
  theme: "light",
  setTheme: (theme: "light" | "dark") => {
    set({ theme });
  },
  toggleTheme: () => {
    set((state: Theme) => ({
      theme: state.theme === "light" ? "dark" : "light",
    }));
  },
}));

export default useThemeStore;
