import React from 'react';



export const Weapon = (props) => {
    const { weapon } = props;

    return (
        <div className='border border-light rounded-lg p-2 text-center'>
            <br></br><br></br>
            <img src={weapon.image} alt="weapon"></img><br></br><br></br>
            <h1>{weapon.name}</h1><br></br>
            <p className='h6'>" <i>{weapon.description} "</i></p><br></br>
            
            <ul>
                <h4>Stats: </h4>
                <li>
                    <h6><b>Physical Damage: {weapon.attack[0].amount}</b></h6>
                </li>
                <li>
                    <h6><b>Magic Damage: {weapon.attack[1].amount}</b></h6>
                </li>
            </ul><br></br>
            
        </div>
    )


}