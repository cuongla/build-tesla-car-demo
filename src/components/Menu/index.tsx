import React, { FC, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa';
import './Menu.css';

interface MenuProps {
    items: string[]
    selectedItem?: number | string | null
    onSelectItem: (selectedItem: number) => void
}

const Menu: FC<MenuProps> = ({ items, selectedItem, onSelectItem }) => {
    const [darkMode, setDarkMode] = useState(false);

    const handleChangeMode = () => setDarkMode((prevState: any) => ({
        ...prevState,
        darkMode: !prevState.darkMode
    }));

    const ModeIcon = darkMode ? FaSun : FaMoon;

    return (
        <div className="menu-container">
            <ul className="menu-nav">
                {items.map((item, i) => (
                    <li
                        key={item}
                        onClick={() => onSelectItem(i)}
                        className={selectedItem === i ? 'selected' : null}
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
