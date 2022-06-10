import React from 'react';



export const Shield = (props) => {
    const { shield } = props;

    return (
        <div>
            <h1>{shield.name}</h1><br></br>
            <h2>{shield.description}</h2>
            <ul>
                <li>
                    <h4>Physical Defense: {shield.defence[0].amount}</h4>
                </li>
                <li>
                    <h4>Magic Defense: {shield.defence[1].amount}</h4>
                </li>
                <li>
                    <h4>Fire Defense: {shield.defence[2].amount}</h4>
                </li>
                <li>
                    <h4>Light Defense: {shield.defence[3].amount}</h4>
                </li>
                <li>
                    <h4>Holy Defense: {shield.defence[4].amount}</h4>
                </li>
                
            </ul>
            
            
            

            <img src={shield.image} alt="shield"></img>

            
        </div>
    )


}