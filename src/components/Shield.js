import React from 'react';



export const Shield = (props) => {
    const { shield } = props;

    return (
        <div className='p-2 text-center'>
            <img src={shield.image} alt="shield"></img><br></br><br></br>
            <h1 className='font-weight-light text-warning m-3'>{shield.name}</h1>
            <h6 className='font-weight-light text-warning'><i>"{shield.description}"</i></h6><br></br>
            <ul>
                <h3 className='font-weight-light text-warning'>Stats: </h3>
                <li>
                    <h6 className='font-weight-light text-warning'>Physical Defense: {shield.defence[0].amount}</h6>
                </li>
                <li>
                    <h6 className='font-weight-light text-warning'>Magic Defense: {shield.defence[1].amount}</h6>
                </li>
                <li>
                    <h6 className='font-weight-light text-warning'>Fire Defense: {shield.defence[2].amount}</h6>
                </li>
                <li>
                    <h6 className='font-weight-light text-warning'>Light Defense: {shield.defence[3].amount}</h6>
                </li>
                <li>
                    <h6 className='font-weight-light text-warning'>Holy Defense: {shield.defence[4].amount}</h6>
                </li>
                
            </ul>
        </div>
    )


}