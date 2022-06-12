import React from 'react';



export const Item = (props) => {
    const { item } = props;

    return (
        <div>
            <img src={item.image} alt="item"></img><br></br><br></br>
            <h3>{item.name}</h3>
            <h6><i>{item.description}</i></h6><br></br>
        </div>
    )


}
