export interface Theme {
    theme: 'light' | 'dark';
    setTheme: (theme: "light" | "dark") => void
    toggleTheme: () => void
}