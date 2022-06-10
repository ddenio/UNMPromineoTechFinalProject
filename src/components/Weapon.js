import React from 'react';



export const Weapon = (props) => {
    const { weapon } = props;

    return (
        <div>
            <h1>{weapon.name}</h1><br></br>
            <h2>{weapon.description}</h2>
            <ul>
                <li>
                    <h4>Physical Damage: {weapon.attack[0].amount}</h4>
                </li>
                <li>
                    <h4>Magic Damage: {weapon.attack[1].amount}</h4>
                </li>
            </ul>
            

            <img src={weapon.image} alt="weapon"></img>

            
        </div>
    )


}