import React, { FC, useCallback, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa';
import './Menu.css';

interface MenuProps {
    items: string[]
    selectedItem?: number | string | null
    onSelectItem: (selectedItem: number) => void
}

const Menu: FC<MenuProps> = ({ items, selectedItem, onSelectItem }) => {
    const [darkMode, setDarkMode] = useState(false);
    const body = document.body;
    const isDarkMode = localStorage.getItem('darkMode');

    const handleChangeMode = useCallback(
        () => {
            setDarkMode(!darkMode);
            // change theme
            darkMode 
                ? body.classList.add('dark-mode') 
                : body.classList.remove('dark-mode');
                 
            localStorage.setItem('darkMode', darkMode.toString());
        },
        [body.classList, darkMode]
    );

    const ModeIcon = isDarkMode === 'true' ? FaSun : FaMoon;

    return (
        <div className="menu-container">
            <ul className="menu-nav">
                {items.map((item, i) => (
                    <li
                        key={item}
                        onClick={() => onSelectItem(i)}
                        className={selectedItem === i ? 'selected' : undefined}
                    >
                        <h2>{item}</h2>
                    </li>
                ))}
            </ul>
            <ModeIcon
                className="mode-icon"
                onClick={handleChangeMode} />
        </div>
    )
}

export default Menu
