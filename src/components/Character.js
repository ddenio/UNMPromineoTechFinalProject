import React from 'react';

// import { NewLevelForm } from './NewLevelForm';

export const Character = (props) => {
    const { character } = props;

    return (
        <div>
            <h1>{character.name}</h1><br></br>
            <h2>{character.description}</h2>

            <img src={character.image} alt="character"></img>

            <ul>
                {Object.entries(character.stats).map(([k,v]) => (
                    <li key={k}>{k} : {v}</li>
                )
                )}
            </ul>
        </div>
    )


}

