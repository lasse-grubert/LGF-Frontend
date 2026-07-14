import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

const STORAGE_KEY = "worktime-display-settings";

function readInitial() {
    if (typeof window === "undefined") {
        return { theme: "light", fontScale: 1, animations: true };
    }
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (raw) return { theme: "light", fontScale: 1, animations: true, ...JSON.parse(raw) };
    } catch {
        /* ignore malformed storage */
    }
    return { theme: "light", fontScale: 1, animations: true };
}

export function ThemeProvider({ children }) {
    const [settings, setSettings] = useState(readInitial);

    // Apply settings to <html> and persist them.
    useEffect(() => {
        const root = document.documentElement;
        root.classList.toggle("dark", settings.theme === "dark");
        root.classList.toggle("reduce-motion", !settings.animations);
        root.style.setProperty("--font-scale", String(settings.fontScale));
        try {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
        } catch {
            /* ignore quota errors */
        }
    }, [settings]);

    const value = {
        ...settings,
        setTheme: (theme) => setSettings((s) => ({ ...s, theme })),
        toggleTheme: () =>
            setSettings((s) => ({ ...s, theme: s.theme === "dark" ? "light" : "dark" })),
        setFontScale: (fontScale) => setSettings((s) => ({ ...s, fontScale })),
        setAnimations: (animations) => setSettings((s) => ({ ...s, animations })),
    };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
    return ctx;
}
