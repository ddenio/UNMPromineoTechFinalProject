import React from 'react';
import { Shield } from './Shield';

import { EldenApi } from './EldenAPI';

export class ShieldList extends React.Component {
    state = {
        shields: []
    };

    componentDidMount() {
        this.fetchShields();
        console.log("Component did mount", this.state);
    }

    fetchShields= async () => {

        let api = new EldenApi();
        // console.log("fetch characters worked, api: " + api);
        const shield = await api.getshields();
        let randomized = [];
        randomized.push(this.getRandomShield(shield));
        
        console.log("fetch random shield; shield: " , randomized);
        this.setState({ shields: randomized });


    };

    getRandomShield(shields) {
            
        var index = Math.floor(Math.random()*shields.length);
        var selection = shields[index];
        console.log('Index: ' , index, selection);
        shields.splice(index, 1);
        
        return selection;
        
        };

    updateShield = async (updatedShield) => {
        let api2 = new EldenApi();
        await api2.putShield(updatedShield);
        this.fetchShields();
    };


    render() {
        // console.log('render method, state is: ' , this.state);
        
        return (
            
            <div>
                
                {/* mapping each character from our character list */}
                {/* {this.state.characters && this.state.characters.map((character) */}
                {this.state.shields && this.state.shields.map((shield) => (
                    <Shield
                        shield={shield}
                        key={shield.id}
                        updateShield={this.updateShield}
                    />
                ))}
            </div>
        )
    }



}