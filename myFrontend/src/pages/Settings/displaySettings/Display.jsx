import SettingsSection from "./SettingsSection.jsx";
import ThemeToggle from "./ThemeToggle.jsx";
import FontSizeSlider from "./FontSizeSlider.jsx";
import { useTheme } from "../../../context/ThemeContext.jsx";
import { Icon } from "../../../components/Icon.jsx";

export function Display() {
    const { animations, setAnimations } = useTheme();

    return (
        <div className="max-w-[800px] w-full mx-auto px-md md:px-xl py-xl space-y-xl">
            <div className="flex items-center gap-md">
                <Icon name="settings" className="text-primary dark:text-inverse-primary text-[32px]" />
                <h1 className="text-headline-lg font-bold text-on-surface dark:text-inverse-on-surface">
                    Display Settings
                </h1>
            </div>

            <div className="bg-white dark:bg-dark-card rounded-card shadow-ambient overflow-hidden">
                <SettingsSection
                    title="Design"
                    description="Choose how Worktime looks to you. Select between Light and Dark themes."
                >
                    <ThemeToggle />
                </SettingsSection>

                <div className="h-px bg-outline-variant/30 mx-lg md:mx-xl" />

                <SettingsSection
                    title="Text & Scaling"
                    description="Adjust the interface scale to make text more comfortable to read."
                >
                    <FontSizeSlider />
                </SettingsSection>

                <div className="h-px bg-outline-variant/30 mx-lg md:mx-xl" />

                <SettingsSection
                    title="Motion"
                    description="Enable interface animations and transitions for a smoother experience."
                >
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={animations}
                            onChange={(e) => setAnimations(e.target.checked)}
                        />
                        <div className="w-12 h-6 bg-surface-container dark:bg-inverse-surface rounded-full peer peer-checked:bg-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white" />
                    </label>
                </SettingsSection>
            </div>

            <div className="bg-surface-container-low dark:bg-dark-surface-container p-lg rounded-card border border-dashed border-outline-variant/50 text-center">
                <p className="text-body-sm text-on-surface-variant dark:text-surface-variant italic">
                    Changes are saved automatically to this device.
                </p>
            </div>
        </div>
    );
}
