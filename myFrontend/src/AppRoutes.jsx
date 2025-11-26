import {Routes, Route } from "react-router-dom";

import {WorktimeCalculator} from "./pages/worktimeCalculator/WorktimeCalculator.jsx";
import {TimeTable} from "./pages/TimeTable/TimeTable.jsx";
import {Display} from "./pages/Settings/displaySettings/Display.jsx";
import {Profile} from "./pages/Settings/profile/Profile.jsx";
import {Logout} from "./pages/Settings/logout/Logout.jsx";
import {Messages} from "./pages/Settings/messages/Messages.jsx";
import {AboutUs} from "./pages/aboutUs/AboutUs.jsx";
import {Contact} from "./pages/contact/Contact.jsx";
import {Projects} from "./pages/projects/Projects.jsx";
import {Services} from "./pages/services/Services.jsx";
import {HomePage} from "./pages/homepage/HomePage.jsx";

export function AppRoutes({rows, addRow, deleteRow}) {
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/worktime-calculator" element={<WorktimeCalculator onAddRow={addRow}/>}/>
            <Route path="/timestable" element={<TimeTable rows={rows} deleteRow={deleteRow}/>}/>
            <Route path="/settings/display" element={<Display/>}/>
            <Route path="/settings/profile" element={<Profile/>}/>
            <Route path="/settings/logout" element={<Logout/>}/>
            <Route path="/settings/messages" element={<Messages/>}/>
            <Route path="/about-us" element={<AboutUs/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contact" element={<Contact/>}/>

        </Routes>
    )
}