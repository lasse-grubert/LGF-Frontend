import { Icon } from "../../../components/Icon.jsx";

export function ButtonLine({
    navigate,
    valueStartTime,
    valuePauseTime,
    valueWorkTime,
    onAddRow,
    setIsVisible,
    clearInput,
    handleCalculate,
}) {
    const handleSubmit = async () => {
        if (!valueStartTime || !valueWorkTime) return;
        setIsVisible(true);
        onAddRow(valueStartTime, valueWorkTime, valuePauseTime);
    };

    return (
        <div className="flex items-center gap-sm mt-md">
            <button
                type="button"
                title="Saved times"
                onClick={() => navigate("/timestable")}
                className="w-12 h-12 flex items-center justify-center border border-outline-variant rounded-input text-on-surface-variant dark:text-surface-variant hover:bg-surface-container dark:hover:bg-inverse-surface transition-all active:scale-95"
            >
                <Icon name="schedule" />
            </button>
            <button
                type="button"
                onClick={() => {
                    handleSubmit();
                    handleCalculate();
                }}
                className="flex-grow h-12 bg-primary text-on-primary font-bold rounded-input hover:bg-on-primary-fixed-variant transition-all active:scale-95 shadow-md"
            >
                Submit
            </button>
            <button
                type="button"
                onClick={() => {
                    setIsVisible(false);
                    clearInput();
                }}
                className="px-md h-12 border border-outline-variant text-primary dark:text-inverse-primary font-bold rounded-input hover:bg-surface-container dark:hover:bg-inverse-surface transition-all active:scale-95"
            >
                Reset
            </button>
        </div>
    );
}
