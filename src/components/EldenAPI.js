const Elden_Endpoint = 'https://eldenring.fanapis.com/api';

export class EldenApi {
    getclass = async () => {
        try {
            // console.log('Get Class', `${Elden_Endpoint}/classes?limit=5`);
            const resp = await fetch(`${Elden_Endpoint}/classes`);
            const data = await resp.json();
            console.log('get class data: ' + data.data);
            return data.data;
        } catch (e) {
            console.log('Fetch Classes had an issue', e);
        }
        
    }

    getitems = async () => {
        try {
            const data2 = await fetch(`${Elden_Endpoint}/items?limit=2`);
            return data2;
        } catch (e) {
            console.log('Fetch Items had an issue', e);
        }
    }

    putHeroClass = async (character) => {
        try {
            console.log('Put Class', `${Elden_Endpoint}/items?limit=2`);
            const resp = await fetch(`${Elden_Endpoint}/${character.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(character)
            });
            return await resp.json();
        } catch(e) {
            console.log('Updating Classes had an issue', e);
        }
    }

    putItem = async (item) => {
        try {
            const resp2 = await fetch(`${Elden_Endpoint}/${item.data.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: item
            });
            return resp2;
        } catch(e) {
            console.log('Updating Classes had an issue', e);
        }
    }
        

}


// export const eldenApi = new EldenApi();
