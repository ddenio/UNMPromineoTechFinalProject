import React from 'react';
import { Item } from './Item';

import { EldenApi } from './EldenAPI';

export class ItemList extends React.Component {
    state = {
        items: []
    };

    componentDidMount() {
        this.fetchItems();
        console.log("Component did mount", this.state);
    }

    fetchItems = async () => {

        let api = new EldenApi();
        // console.log("fetch characters worked, api: " + api);
        const items = await api.getitems();
        let randomized = [];
        randomized.push(this.getRandomItem(items));
        randomized.push(this.getRandomItem(items));
        randomized.push(this.getRandomItem(items));
        
        
            

        console.log("fetch random items; items: " , randomized);
        this.setState({ items: randomized });


    };

    getRandomItem(items) {
            
        var index = Math.floor(Math.random()*items.length);
        var selection = items[index];
        console.log('Index: ' , index, selection);
        items.splice(index, 1);
        
        return selection;
        
        };

    updateItem = async (updatedItem) => {
        let api2 = new EldenApi();
        await api2.putItem(updatedItem);
        this.fetchItems();
    };


    render() {
        // console.log('render method, state is: ' , this.state);
        
        return (
            
            <div>
                
                {/* mapping each character from our character list */}
                {/* {this.state.characters && this.state.characters.map((character) */}
                {this.state.items && this.state.items.map((item) => (
                    <Item
                        item={item}
                        key={item.id}
                        updateItem={this.updateItem}
                    />
                ))}
            </div>
        )
    }



}