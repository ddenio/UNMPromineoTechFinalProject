import React from 'react';
import { Character } from './Character';
import { eldenApi } from './EldenAPI';

export class CharacterList extends React.Component {
    
        state = {
            characters : []
    };
 
            

    componentDidMount() {
        this.fetchCharacters();
    }

    fetchCharacters = async () => {
        const characters = await eldenApi.getclass();
        this.setState({ characters });
    };

    updateCharacter = async (updatedCharacter) => {
        await eldenApi.putHeroClass(updatedCharacter);
        this.fetchCharacters();
    };

    
    render() {
        return (
            <div>
                {/* mapping each character from our character list */}
                {this.state.characters.data.map((character) => (
                    <Character
                        character={character.data}
                        key={character.data.id}
                        updateCharacter= {this.updateCharacter}
                        />
                ))}
            </div>
        )
    }

    

}

