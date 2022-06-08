import React from 'react';

// import { NewLevelForm } from './NewLevelForm';

export const Character = (props) => {
    const { character } = props;

    return (
        <div>
            <h1>{character.data.name}</h1>
        </div>
    )


}

