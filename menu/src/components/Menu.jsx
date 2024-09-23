import React, { useState } from 'react';
import data from "../data";
import './Menu.css';
import MenuItem from './MenuItem';

const Menu = () => {
    const [menuItems, setMenuItems] = useState(data);

    return (
        <div className="menu-container">
            <h1>Our Menu</h1>
            {menuItems.map((menuItem) => (
                <MenuItem
                    key={menuItem.id}
                    title={menuItem.title}
                    price={menuItem.price}
                    img={menuItem.img}
                    desc={menuItem.desc}
                />
            ))}
        </div>
    );
};

export default Menu;
