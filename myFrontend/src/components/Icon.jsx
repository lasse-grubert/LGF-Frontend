// Thin wrapper around Google's Material Symbols (loaded via index.html).
// Usage: <Icon name="settings" /> or <Icon name="play_arrow" filled />
export function Icon({ name, className = "", filled = false, style }) {
    return (
        <span
            className={`material-symbols-outlined${filled ? " filled" : ""} ${className}`}
            style={style}
            aria-hidden="true"
        >
            {name}
        </span>
    );
}
