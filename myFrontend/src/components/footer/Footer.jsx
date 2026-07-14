const FOOTER_LINKS = ["Privacy Policy", "Terms of Service", "Support", "Status"];

export function Footer() {
    return (
        <footer className="w-full bg-surface-container-low dark:bg-dark-surface-container border-t border-outline-variant/60 dark:border-inverse-surface">
            <div className="flex flex-col md:flex-row justify-between items-center w-full px-md md:px-xl py-lg max-w-container-max mx-auto gap-md">
                <div className="flex flex-col items-center md:items-start gap-xs">
                    <span className="text-body-lg font-semibold text-on-surface dark:text-inverse-on-surface">
                        Worktime
                    </span>
                    <span className="text-body-sm text-on-surface-variant dark:text-surface-variant">
                        © {new Date().getFullYear()} Worktime Productivity. All rights reserved.
                    </span>
                </div>
                <div className="flex flex-wrap justify-center gap-lg">
                    {FOOTER_LINKS.map((label) => (
                        <a
                            key={label}
                            href="#"
                            className="text-label-caps font-label-caps text-on-surface-variant dark:text-surface-variant hover:text-on-surface dark:hover:text-inverse-on-surface hover:underline transition-all"
                        >
                            {label}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
