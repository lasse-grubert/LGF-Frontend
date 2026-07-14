import { Outlet } from "react-router-dom";
import { Navbar } from "../navbar/Navbar.jsx";
import { Footer } from "../footer/Footer.jsx";

export function Layout() {
    return (
        <div className="min-h-screen flex flex-col bg-surface text-on-surface dark:bg-dark-surface dark:text-inverse-on-surface">
            <Navbar />
            <main className="flex-grow flex flex-col">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
