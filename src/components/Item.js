import React from 'react';



export const Item = (props) => {
    const { item } = props;

    return (
        <div>
            <img src={item.image} alt="item"></img><br></br>
            <h1>{item.name}</h1><br></br>
            <h4><i>{item.description}</i></h4>
        </div>
    )


}
