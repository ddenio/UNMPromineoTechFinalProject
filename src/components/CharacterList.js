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

        const allCharacters = await this.fetchAllCharacters();


        let randomized = [];

        this.setState((oldState, _ ) => {
            const oldCharacters = oldState.characters;


            for (let i = 0; i < oldCharacters.length; i++) {
                const oldCharacter = oldCharacters[i];

                const found = allCharacters.findIndex((x) => x.id === oldCharacter.id);
                if (found !== -1) {
                    randomized.push(allCharacters[found]);
                    allCharacters.splice(found, 1);
                }
            }

            this.populateCharacters(randomized, allCharacters);
            return {
                characters: randomized
            };
        });
    };

    fetchAllCharacters = async () => {
        let api = new EldenApi();
        const allCharacters = await api.getclass();
        //API containes duplicate Warrior class, getting rid of the duplicate one :)
        return allCharacters.filter((character) => character.id !== '17f69ee8607l0i32idtlwxck1pcnha');
        
    }

    deleteCharacter = async (id) => {

        const allCharacters = await this.fetchAllCharacters();
       
        this.setState((oldState, _ ) => {
            const oldCharacters = oldState.characters;
            const existingIds = oldCharacters.map((character) => character.id);
            const filteredCharacters = allCharacters.filter((character) => !existingIds.includes(character.id));
            const randomized = oldCharacters.filter((character) => character.id !== id);
            this.populateCharacters(randomized, filteredCharacters);
            
            return {
                characters: randomized
            };
        });
    };

    populateCharacters(currentCharacters, potentialCharacters) {
        while (currentCharacters.length < 3 && potentialCharacters.length > 0) {
            currentCharacters.push(this.getRandomClass(potentialCharacters));
        }
    };

    getRandomClass(classes) {

        var index = Math.floor(Math.random() * classes.length);
        var selection = classes[index];
        console.log('Index: ', index, selection);
        classes.splice(index, 1);

        return selection;

    };

    updateCharacterName = async({id , name}) => {
      this.setState((oldState, _ ) => {
          const oldCharacters = oldState.characters;
          const updated = [...oldCharacters];
          const index = updated.findIndex((character) => character.id === id);

          if (index !== -1) {
            const oldCharacter =  updated[index];
            const updatedCharacter = {...oldCharacter, name};
            updated[index] = updatedCharacter;
          }

          return {
              characters: updated
          };
      });
    };

    addCharacter = async ({ name }) => {
        let api = new EldenApi();
        await api.postCharacter({
            name
        });
        this.fetchCharacters();
    };

    removeCharacter = async (character) => {
        let api = new EldenApi();
        await api.deleteCharacter(character)({
            character: character.id
        });
        this.fetchCharacters();
    };


    render() {
        console.log('render method, state is: ', this.state);

        return (

            <div>

                {this.state.characters && this.state.characters.map((character) => (
                    <Character
                        character={character}
                        key={character.id}
                        deleteCharacter={this.deleteCharacter}
                        updateCharacterName={this.updateCharacterName}
                    />


                ))}

            </div>


        )
    }



}

