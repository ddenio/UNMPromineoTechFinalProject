import React from 'react';



export const Weapon = (props) => {
    const { weapon } = props;

    return (
        <div>
            <img src={weapon.image} alt="weapon"></img><br></br>
            <h1>{weapon.name}</h1><br></br>
            <h4><i>{weapon.description}</i></h4><br></br>
            
            <ul>
                <h3>Stats: </h3>
                <li>
                    <h4>Physical Damage: {weapon.attack[0].amount}</h4>
                </li>
                <li>
                    <h4>Magic Damage: {weapon.attack[1].amount}</h4>
                </li>
            </ul><br></br>
            
        </div>
    )


}