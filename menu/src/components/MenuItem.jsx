
import React from 'react';
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

export default MenuItem;
