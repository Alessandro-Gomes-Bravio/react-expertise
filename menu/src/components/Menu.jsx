import { useState } from "react";
import data from "../data";
import './Menu.css';


const MenuItem = ({ title, category, price, img, desc }) => {
    return (
        <div>
            <img src={img} alt={title} />
            <div className="top">
            <h3>{title}</h3>
            <p>Price: ${price.toFixed(2)}</p>
            </div>
            <p>{desc}</p>
        </div>
    );
};

const Menu = () => {
    const [menuItems, setMenuItems] = useState(data);
    
    return (
        <ul>
            <h1>Our menu</h1>
            {menuItems.map((menuItem) => (
                <MenuItem
                    key={menuItem.id}
                    title={menuItem.title}
                    category={menuItem.category}
                    price={menuItem.price}
                    img={menuItem.img}
                    desc={menuItem.desc}
                />
            ))}
        </ul>
    );
};


export default Menu;
