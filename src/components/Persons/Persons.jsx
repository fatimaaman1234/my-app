import React from 'react';
import './Persons.css';
import Person from './Person/Person';


export default function Persons(){
    return (
        <div className="Persons">
            <p>Persons components</p>
            <Person />
            <Person />

        </div>
    )
}