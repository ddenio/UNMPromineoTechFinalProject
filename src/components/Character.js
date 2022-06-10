import React from 'react';
import { WeaponList } from './WeaponList';
import { ShieldList } from './ShieldList';
import { ItemList } from './ItemList';

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
            </ul><br></br>
            <WeaponList /><br></br>
            <ShieldList /><br></br>
            <ItemList /><br></br>
        </div>
    )


}

