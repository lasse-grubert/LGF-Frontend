import React, { useState, useEffect } from 'react';
import SettingsSection from './SettingsSection.jsx';
import ThemeToggle from './ThemeToggle.jsx';
import FontSizeSlider from './FontSizeSlider.jsx';
import {Navbar} from '../../../components/navbar/Navbar.jsx';
import { IoSettingsSharp } from "react-icons/io5";
import "./Display..css"

export function Display(){

    return (
        <>
        <Navbar/>
        <div className={`settings-page dark-mode`}>
          <h1><span><IoSettingsSharp/></span>Display Settings</h1>

            <SettingsSection title="Design" description="Wählen Sie Ihr bevorzugtes Erscheinungsbild für die Anwendung.">
                <ThemeToggle
                />
            </SettingsSection>

            <hr />

            <SettingsSection title="Text & Skalierung" description="Passen Sie die Lesbarkeit des Inhalts an.">
                {/* Angenommen, du hast die FontSizeSlider-Komponente auch in JSX umgewandelt */}
                <FontSizeSlider
                />
            </SettingsSection>

            <hr />

            <SettingsSection title="Bewegung" description="Deaktivieren Sie Animationen, um visuelle Bewegungen zu reduzieren.">
                <label className="switch-control">
                    Animationen aktivieren
                    <input
                        type="checkbox"
                    />
                    <span className="slider round"></span>
                </label>
            </SettingsSection>
        </div>
        </>
    );
};
