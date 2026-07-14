import { useTheme } from "../../../context/ThemeContext.jsx";
import { Icon } from "../../../components/Icon.jsx";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const option = (value, icon, label) => {
        const active = theme === value;
        return (
            <button
                type="button"
                onClick={() => setTheme(value)}
                className={`flex items-center gap-xs px-md py-sm rounded-lg transition-all duration-200 ${
                    active
                        ? "bg-primary text-white shadow-sm"
                        : "text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-high dark:hover:bg-inverse-surface"
                }`}
            >
                <Icon name={icon} className="text-[20px]" />
                <span className="text-label-caps font-label-caps">{label}</span>
            </button>
        );
    };

    return (
        <div className="flex bg-surface-container dark:bg-inverse-surface p-xs rounded-lg w-fit">
            {option("light", "light_mode", "Light")}
            {option("dark", "dark_mode", "Dark")}
        </div>
    );
}
