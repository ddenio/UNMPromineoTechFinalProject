import React from 'react';
import { Character } from './Character';
import { EldenApi } from './EldenAPI';

export class CharacterList extends React.Component {
    state = {
        characters: []
    };

    componentDidMount() {
        this.fetchCharacters();
        console.log("Component did mount", this.state);
    }

    fetchCharacters = async () => {

        let api = new EldenApi();
        // console.log("fetch characters worked, api: " + api);
        const characters = await api.getclass();
        let randomized = [];
        randomized.push(this.getRandomClass(characters));
        randomized.push(this.getRandomClass(characters));
        randomized.push(this.getRandomClass(characters));
        randomized.push(this.getRandomClass(characters));
        randomized.push(this.getRandomClass(characters));
        
            

        console.log("fetch random characters; characters: " , randomized);
        this.setState({ characters: randomized });


    };

    getRandomClass(classes) {
            
        var index = Math.floor(Math.random()*classes.length);
        var selection = classes[index];
        console.log('Index: ' , index, selection);
        classes.splice(index, 1);
        
        return selection;
        
        };

    updateCharacter = async (updatedCharacter) => {
        let api2 = new EldenApi();
        await api2.putHeroClass(updatedCharacter);
        this.fetchCharacters();
    };


    render() {
        console.log('render method, state is: ' , this.state);
        
        return (
            
            <div>
                
                {/* mapping each character from our character list */}
                {/* {this.state.characters && this.state.characters.map((character) */}
                {this.state.characters && this.state.characters.map((character) => (
                    <Character
                        character={character}
                        key={character.id}
                        updateCharacter={this.updateCharacter}
                    />
                ))}
            </div>
        )
    }



}

