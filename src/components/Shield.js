import React from 'react';



export const Shield = (props) => {
    const { shield } = props;

    return (
        <div className='p-2 text-center'>
            <img src={shield.image} alt="shield"></img><br></br><br></br>
            <h1>{shield.name}</h1>
            <h6><i>"{shield.description}"</i></h6><br></br>
            <ul>
                <h3>Stats: </h3>
                <li>
                    <h6>Physical Defense: {shield.defence[0].amount}</h6>
                </li>
                <li>
                    <h6>Magic Defense: {shield.defence[1].amount}</h6>
                </li>
                <li>
                    <h6>Fire Defense: {shield.defence[2].amount}</h6>
                </li>
                <li>
                    <h6>Light Defense: {shield.defence[3].amount}</h6>
                </li>
                <li>
                    <h6>Holy Defense: {shield.defence[4].amount}</h6>
                </li>
                
            </ul>
        </div>
    )


}