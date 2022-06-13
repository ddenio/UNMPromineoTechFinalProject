import React from 'react';



export const Item = (props) => {
    const { item } = props;

    return (
        <div className='border border-light rounded m-3 p-4'>
            <img src={item.image} alt="item"></img><br></br><br></br>
            <h2 className='font-weight-light text-warning m-1'>{item.name}</h2><br></br>
            <h6 className='font-weight-light text-warning m-1'><i>"{item.description}"</i></h6><br></br>
        </div>
    )


}
