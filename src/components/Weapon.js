import React from 'react';



export const Weapon = (props) => {
    const { weapon } = props;

    return (
        <div className='p-2 text-center'>
            <br></br><br></br>
            <img src={weapon.image} alt="weapon"></img><br></br><br></br>
            <h1 className='font-weight-light text-warning'>{weapon.name}</h1><br></br>
            <p className='h6 font-weight-light text-warning'>" <i>{weapon.description} "</i></p><br></br>
            
            <ul>
                <h4 className='text-warning'>Stats: </h4>
                <li>
                    <h6 className='text-warning'>Physical Damage: {weapon.attack[0].amount}</h6>
                </li>
                <li>
                    <h6 className='text-warning'>Magic Damage: {weapon.attack[1].amount}</h6>
                </li>
            </ul><br></br>
            
        </div>
    )


}