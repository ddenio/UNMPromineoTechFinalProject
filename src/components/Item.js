import React from 'react';



export const Item = (props) => {
    const { item } = props;

    return (
        <div>
            <h1>{item.name}</h1><br></br>
            <h2>{item.description}</h2>

            <img src={item.image} alt="item"></img>

            
        </div>
    )


}
