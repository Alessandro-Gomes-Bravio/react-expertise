import { useState } from "react";
import data from "../data";
import './Menu.css';

const MenuItem = ({ title, price, img, desc }) => {
    return (
        <div className="menu-item">
            <img src={img} alt={title} />
            <div>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
            <p className="price">${price.toFixed(2)}</p>
        </div>
    );
};

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
