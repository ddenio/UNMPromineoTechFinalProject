import React from 'react';
import { Weapon } from './Weapon';

import { EldenApi } from './EldenAPI';

export class WeaponList extends React.Component {
    state = {
        weapons: []
    };

    componentDidMount() {
        this.fetchWeapons();
        console.log("Component did mount", this.state);
    }

    fetchWeapons = async () => {

        let api = new EldenApi();
        // console.log("fetch characters worked, api: " + api);
        const weapon = await api.getweapons();
        let randomized = [];
        randomized.push(this.getRandomWeapon(weapon));
        
        console.log("fetch random weapon; weapon: " , randomized);
        this.setState({ weapons: randomized });


    };

    getRandomWeapon(weapons) {
            
        var index = Math.floor(Math.random()*weapons.length);
        var selection = weapons[index];
        console.log('Index: ' , index, selection);
        weapons.splice(index, 1);
        
        return selection;
        
        };

    updateWeapon = async (updatedWeapon) => {
        let api2 = new EldenApi();
        await api2.putItem(updatedWeapon);
        this.fetchWeapons();
    };


    render() {
        console.log('render method, state is: ' , this.state);
        
        return (
            
            <div>
                
                {/* mapping each character from our character list */}
                {/* {this.state.characters && this.state.characters.map((character) */}
                {this.state.weapons && this.state.weapons.map((weapon) => (
                    <Weapon
                        weapon={weapon}
                        key={weapon.id}
                        updateWeapon={this.updateWeapon}
                    />
                ))}
            </div>
        )
    }



}