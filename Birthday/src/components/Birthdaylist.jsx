import React, { useState } from 'react';
import './Birthdaylist.css';
import data from './data';
const Birthdaylist = () => {
    const [birthdayList, setBirthdayList] = useState(data);

    const clearList = () => {
        setBirthdayList([]);
    };

    return (
        <div className="Birthdaylist">
            <h2 className="BirthdaylistName">Birthdays today</h2>
            <ul>
                {birthdayList.map((person) => (
                    <li key={person.id} className="BirthdayItem">
                        <img src={person.image} alt={`${person.name}'s profile`} className="BirthdayImage" />
                        <div className="BirthdayDetails">
                            <h3>{person.name}</h3>
                            <p>Age: {person.age}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <button onClick={clearList} className="ClearButton">Clear All</button> {}
        </div>
    );
}

export default Birthdaylist;
