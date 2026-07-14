import { useTheme } from "../../../context/ThemeContext.jsx";

const MIN = 0.85;
const MAX = 1.25;

export default function FontSizeSlider() {
    const { fontScale, setFontScale } = useTheme();
    const value = Math.round(((fontScale - MIN) / (MAX - MIN)) * 100);

    return (
        <div className="space-y-md w-full max-w-md">
            <div className="flex justify-between text-label-caps font-label-caps text-on-surface-variant dark:text-surface-variant">
                <span>Small</span>
                <span>Standard</span>
                <span>Large</span>
            </div>
            <input
                className="w-full h-2 bg-surface-container dark:bg-inverse-surface rounded-lg appearance-none cursor-pointer accent-primary"
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={(e) => {
                    const pct = Number(e.target.value) / 100;
                    setFontScale(Number((MIN + pct * (MAX - MIN)).toFixed(3)));
                }}
            />
        </div>
    );
}
