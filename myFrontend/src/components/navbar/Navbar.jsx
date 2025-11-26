import "./Navbar.css"
import {Link} from "react-router-dom"
import { IoSettingsSharp } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";
import { NavbarElements } from "./NavbarElements.jsx";


export function Navbar() {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const settingsRef = useRef(null);
    const toggleSettings = () => {
        setIsSettingsOpen(!isSettingsOpen);
    };


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (settingsRef.current && !settingsRef.current.contains(event.target)) {
                setIsSettingsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {

            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [settingsRef]);


    return (
        <div>
            <nav className="navbar">
                <ul className="navbar-scroll-list">
                    <NavbarElements/>
                    {/* Einstellungs-Link mit Dropdown-Funktionalität */}
                    <li className="settings-container" ref={settingsRef}> {/* Ref hier anwenden */}
                        <a
                            href="#"
                            onClick={toggleSettings}
                            className={isSettingsOpen ? 'active' : ''}
                        >
                            <IoSettingsSharp
                                color="#82AAFF"
                                className={isSettingsOpen ? 'settings-icon rotate' : 'settings-icon'}
                            />
                        </a>

                        {/* Dropdown-Menü */}
                        <div className={`settings-dropdown ${isSettingsOpen ? 'open' : ''}`}>
                            <Link to="/settings/profile" onClick={() => setIsSettingsOpen(false)}>Profile</Link>
                            <Link to="/settings/display" onClick={() => setIsSettingsOpen(false)}>Display settings</Link>
                            <Link to="/settings/messages" onClick={() => setIsSettingsOpen(false)}>Messages</Link>
                            <Link to="/settings/logout" onClick={() => setIsSettingsOpen(false)}>Logout</Link>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
}