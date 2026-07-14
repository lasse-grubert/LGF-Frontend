import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "../Icon.jsx";

const NAV_LINKS = [
    { to: "/worktime-calculator", label: "Worktime Calculator" },
    { to: "/timestable", label: "Timetable" },
    { to: "/about-us", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
];

const SETTINGS_LINKS = [
    { to: "/settings/profile", label: "Profile" },
    { to: "/settings/display", label: "Display settings" },
    { to: "/settings/messages", label: "Messages" },
    { to: "/settings/logout", label: "Logout" },
];

const linkClasses = ({ isActive }) =>
    [
        "text-label-caps font-label-caps transition-colors whitespace-nowrap pb-1 border-b-2",
        isActive
            ? "text-primary dark:text-inverse-primary border-primary dark:border-inverse-primary"
            : "text-on-surface-variant dark:text-surface-variant border-transparent hover:text-primary dark:hover:text-inverse-primary",
    ].join(" ");

export function Navbar() {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const settingsRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (settingsRef.current && !settingsRef.current.contains(event.target)) {
                setIsSettingsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="sticky top-0 z-50 w-full bg-surface dark:bg-dark-surface-container shadow-ambient">
            <nav className="flex justify-between items-center w-full px-md md:px-xl py-md max-w-container-max mx-auto">
                <div className="flex items-center gap-xl">
                    <Link
                        to="/"
                        className="text-headline-md font-bold text-primary dark:text-inverse-primary tracking-tight"
                    >
                        Worktime
                    </Link>
                    <div className="hidden md:flex items-center gap-lg">
                        {NAV_LINKS.map((link) => (
                            <NavLink key={link.to} to={link.to} className={linkClasses}>
                                {link.label}
                            </NavLink>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-md">
                    {/* Settings dropdown */}
                    <div className="relative" ref={settingsRef}>
                        <button
                            type="button"
                            onClick={() => setIsSettingsOpen((v) => !v)}
                            aria-label="Settings"
                            aria-expanded={isSettingsOpen}
                            className="p-sm rounded-full text-primary dark:text-inverse-primary hover:bg-surface-container-low dark:hover:bg-inverse-surface transition-all duration-200 active:scale-95"
                        >
                            <Icon
                                name="settings"
                                className={isSettingsOpen ? "transition-transform rotate-90" : "transition-transform"}
                            />
                        </button>
                        <div
                            className={`absolute right-0 mt-sm w-52 origin-top-right rounded-card bg-white dark:bg-dark-card shadow-ambient border border-outline-variant/40 p-xs transition-all duration-150 ${
                                isSettingsOpen
                                    ? "opacity-100 scale-100 pointer-events-auto"
                                    : "opacity-0 scale-95 pointer-events-none"
                            }`}
                        >
                            {SETTINGS_LINKS.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    onClick={() => setIsSettingsOpen(false)}
                                    className="block px-md py-sm rounded-lg text-body-sm text-on-surface dark:text-inverse-on-surface hover:bg-surface-container-low dark:hover:bg-inverse-surface transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Avatar */}
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant/60 bg-surface-container flex items-center justify-center text-primary dark:text-inverse-primary">
                        <Icon name="person" filled />
                    </div>

                    {/* Mobile menu toggle */}
                    <button
                        type="button"
                        onClick={() => setIsMobileOpen((v) => !v)}
                        aria-label="Menu"
                        className="md:hidden p-sm text-on-surface dark:text-inverse-on-surface"
                    >
                        <Icon name={isMobileOpen ? "close" : "menu"} />
                    </button>
                </div>
            </nav>

            {/* Mobile nav panel */}
            {isMobileOpen && (
                <div className="md:hidden border-t border-outline-variant/30 bg-surface dark:bg-dark-surface-container px-md py-sm">
                    {NAV_LINKS.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            onClick={() => setIsMobileOpen(false)}
                            className={({ isActive }) =>
                                `block px-sm py-sm rounded-lg text-body-md transition-colors ${
                                    isActive
                                        ? "text-primary dark:text-inverse-primary bg-surface-container-low dark:bg-inverse-surface"
                                        : "text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-low dark:hover:bg-inverse-surface"
                                }`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>
            )}
        </header>
    );
}
