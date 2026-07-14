export default function SettingsSection({ title, description, children }) {
    return (
        <div className="p-lg md:p-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-md">
                <div className="space-y-xs max-w-md">
                    <h2 className="text-body-lg font-semibold text-on-surface dark:text-inverse-on-surface">
                        {title}
                    </h2>
                    <p className="text-body-sm text-on-surface-variant dark:text-surface-variant">
                        {description}
                    </p>
                </div>
                <div className="shrink-0">{children}</div>
            </div>
        </div>
    );
}
