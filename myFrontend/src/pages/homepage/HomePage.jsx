import { Link } from "react-router-dom";
import { Icon } from "../../components/Icon.jsx";

const DEEP_WORK = [
    {
        icon: "visibility_off",
        title: "Zero Distractions",
        text: "We've removed the noise. No cluttered sidebars, no intrusive notifications. Just you and your work, organized perfectly.",
    },
    {
        icon: "speed",
        title: "Instant Velocity",
        text: "Built for speed. Millisecond latency across all interactions ensures your mind moves faster than the interface.",
    },
    {
        icon: "verified_user",
        title: "Enterprise Security",
        text: "Your data is encrypted at rest and in transit. We prioritize your privacy so you can focus on building your legacy.",
    },
];

export function HomePage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-xl px-md md:px-xl overflow-hidden">
                <div className="max-w-container-max mx-auto text-center relative z-10">
                    <div className="mb-md inline-flex items-center gap-sm px-md py-xs rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-caps text-label-caps">
                        <Icon name="bolt" className="text-[16px]" />
                        <span>SYSTEM READY</span>
                    </div>
                    <h1 className="font-display text-display text-on-surface dark:text-inverse-on-surface mb-md max-w-4xl mx-auto">
                        Welcome to Worktime
                    </h1>
                    <p className="text-body-lg text-on-surface-variant dark:text-surface-variant max-w-2xl mx-auto mb-xl">
                        Engineered for high-performance professionals. Achieve a state of deep flow with
                        precision tools designed to eliminate visual noise and amplify your output.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-md">
                        <Link
                            to="/worktime-calculator"
                            className="px-xl py-md bg-primary text-on-primary font-label-caps text-label-caps rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 active:scale-95"
                        >
                            GET STARTED FREE
                        </Link>
                        <Link
                            to="/about-us"
                            className="px-xl py-md border border-outline-variant text-primary dark:text-inverse-primary font-label-caps text-label-caps rounded-xl hover:bg-surface-container-low dark:hover:bg-inverse-surface transition-all active:scale-95"
                        >
                            VIEW DOCUMENTATION
                        </Link>
                    </div>
                </div>

                {/* Decorative blurred blobs */}
                <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none">
                    <div className="absolute top-[10%] left-[20%] w-96 h-96 bg-primary-container blur-[120px] rounded-full" />
                    <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-surface-container-highest blur-[100px] rounded-full" />
                </div>
            </section>

            {/* Bento grid */}
            <section className="py-xl px-md md:px-xl">
                <div className="max-w-container-max mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
                        {/* Main feature */}
                        <div className="md:col-span-8 group relative overflow-hidden rounded-card bg-white dark:bg-dark-card shadow-ambient p-xl min-h-[400px] flex flex-col justify-end border border-transparent hover:border-primary-fixed transition-colors">
                            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-surface-container to-primary-fixed dark:from-inverse-surface dark:to-primary-container/40 flex items-center justify-center">
                                <Icon name="keyboard" className="text-[120px] text-primary/40 dark:text-inverse-primary/40" />
                            </div>
                            <div className="relative z-10 max-w-md">
                                <span className="text-primary dark:text-inverse-primary font-label-caps text-label-caps mb-sm block">
                                    CALCULATED PRECISION
                                </span>
                                <h3 className="text-headline-lg font-bold text-on-surface dark:text-inverse-on-surface mb-sm">
                                    Master Your Schedule
                                </h3>
                                <p className="text-body-md text-on-surface-variant dark:text-surface-variant">
                                    The Worktime Calculator predicts exactly when you can leave, factoring in
                                    your start time, target hours and breaks — so you never lose a minute of flow.
                                </p>
                            </div>
                        </div>

                        {/* AI insights */}
                        <div className="md:col-span-4 rounded-card bg-primary-container p-xl flex flex-col justify-between text-on-primary shadow-lg min-h-[400px] md:min-h-0">
                            <Icon name="auto_awesome" className="text-[48px] opacity-80" />
                            <div>
                                <h3 className="text-headline-md font-semibold mb-sm">Smart Insights</h3>
                                <p className="text-body-sm opacity-90">
                                    Analysis of your logged hours to surface optimal break times and focus blocks.
                                </p>
                            </div>
                        </div>

                        {/* Analytics */}
                        <div className="md:col-span-4 rounded-card bg-white dark:bg-dark-card shadow-ambient p-xl border border-outline-variant/40">
                            <h4 className="text-headline-md font-semibold text-on-surface dark:text-inverse-on-surface mb-md">
                                Analytics
                            </h4>
                            <div className="space-y-md">
                                <div className="w-full bg-surface-container dark:bg-inverse-surface rounded-full h-2">
                                    <div className="bg-emerald h-2 rounded-full w-[85%]" />
                                </div>
                                <div className="flex justify-between items-center text-body-sm tabular-nums">
                                    <span className="text-on-surface-variant dark:text-surface-variant">
                                        Weekly Progress
                                    </span>
                                    <span className="text-emerald font-bold">85%</span>
                                </div>
                            </div>
                        </div>

                        {/* Global ecosystem */}
                        <div className="md:col-span-8 relative overflow-hidden rounded-card bg-inverse-surface p-xl flex flex-col sm:flex-row items-center gap-xl text-white">
                            <div className="w-full sm:w-1/3 h-32 rounded-xl bg-gradient-to-br from-primary-container to-inverse-surface flex items-center justify-center">
                                <Icon name="hub" className="text-[56px] text-inverse-primary" />
                            </div>
                            <div className="w-full sm:w-2/3">
                                <h3 className="text-headline-md font-semibold mb-sm">Global Ecosystem</h3>
                                <p className="text-body-sm opacity-80 mb-md">
                                    Connect your entire workflow with native integrations for your favorite tools.
                                </p>
                                <div className="flex gap-sm">
                                    {["hub", "database", "cloud"].map((name) => (
                                        <div
                                            key={name}
                                            className="w-8 h-8 rounded bg-white/10 flex items-center justify-center"
                                        >
                                            <Icon name={name} className="text-[18px]" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Designed for deep work */}
            <section className="py-xl px-md md:px-xl bg-surface-bright dark:bg-dark-surface-container">
                <div className="max-w-3xl mx-auto py-xl">
                    <div className="text-center mb-xl">
                        <h2 className="text-headline-lg font-bold text-on-surface dark:text-inverse-on-surface mb-sm">
                            Designed for Deep Work
                        </h2>
                        <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
                    </div>
                    <div className="space-y-xl">
                        {DEEP_WORK.map((item) => (
                            <div key={item.title} className="flex gap-lg">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-surface-container dark:bg-inverse-surface flex items-center justify-center">
                                    <Icon name={item.icon} className="text-primary dark:text-inverse-primary" />
                                </div>
                                <div>
                                    <h4 className="text-headline-md font-semibold text-on-surface dark:text-inverse-on-surface mb-xs">
                                        {item.title}
                                    </h4>
                                    <p className="text-body-md text-on-surface-variant dark:text-surface-variant">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
