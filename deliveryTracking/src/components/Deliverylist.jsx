import React, { useState } from 'react';
import Delivery from './Delivery';
import './Deliverylist.css';

const Deliverylist = () => {
    const [deliveries, setDeliveries] = useState([
        { name: "package 1", orderID: "1234567", delivered: "no" },
        { name: "package 2", orderID: "1234567", delivered: "no" },
        { name: "package 3", orderID: "15473658565", delivered: "no" },
        { name: "package 4", orderID: "12354834567", delivered: "no" },
        { name: "package 5", orderID: "19769567", delivered: "no" },
        { name: "package 6", orderID: "1397697474525", delivered: "no" }
    ]);

    return (
        <ul className="Deliverylist">
            <h2 className='DeliverylistName'>Delivery Tracking</h2>
            {deliveries.map((delivery, index) => (
                <li key={index}>
                    <Delivery 
                        name={delivery.name}
                        orderID={delivery.orderID}
                        delivered={delivery.delivered}
                    />
                </li>
            ))}
        </ul>
    );
}

export default Deliverylist;

