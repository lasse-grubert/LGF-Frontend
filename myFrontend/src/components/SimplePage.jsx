import { Icon } from "./Icon.jsx";

// Lightweight placeholder page in the Productive Flux style.
export function SimplePage({ icon, eyebrow, title, children }) {
    return (
        <div className="flex-grow flex items-center justify-center px-md md:px-xl py-xl">
            <div className="max-w-2xl w-full text-center">
                {icon && (
                    <div className="mx-auto mb-md w-14 h-14 rounded-xl bg-surface-container dark:bg-inverse-surface flex items-center justify-center">
                        <Icon name={icon} className="text-primary dark:text-inverse-primary text-[28px]" />
                    </div>
                )}
                {eyebrow && (
                    <span className="text-label-caps font-label-caps text-primary dark:text-inverse-primary block mb-sm">
                        {eyebrow}
                    </span>
                )}
                <h1 className="text-headline-lg font-bold text-on-surface dark:text-inverse-on-surface mb-md">
                    {title}
                </h1>
                {children && (
                    <p className="text-body-md text-on-surface-variant dark:text-surface-variant max-w-xl mx-auto">
                        {children}
                    </p>
                )}
            </div>
        </div>
    );
}
