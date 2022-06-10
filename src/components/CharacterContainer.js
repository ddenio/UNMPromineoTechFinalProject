import React from 'react';
import { CharacterList } from './CharacterList';
import { ItemList } from './ItemList';

export class CharacterContainer extends React.Component {
    

    render() {
        return (
            
            <div>
                <CharacterList />
                    
                <ItemList />
                    
                
               
            </div>
        )
    }



}