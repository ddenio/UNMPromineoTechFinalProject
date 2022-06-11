const Elden_Endpoint = 'https://eldenring.fanapis.com/api';

export class EldenApi {
    getclass = async () => {
        try {
            // console.log('Get Class', `${Elden_Endpoint}/classes?limit=5`);
            const resp = await fetch(`${Elden_Endpoint}/classes`);
            const data = await resp.json();
            // console.log('get class data: ' + data.data);
            return data.data;
        } catch (e) {
            console.log('Fetch Classes had an issue', e);
        }
        
    }

    getitems = async () => {
        try {
            const resp = await fetch(`${Elden_Endpoint}/items`);
            const data = await resp.json();
            console.log('get items data: ' , data)
            return data.data;
        } catch (e) {
            console.log('Fetch Items had an issue', e);
        }
    }

    getweapons = async () => {
        try {
            const resp = await fetch(`${Elden_Endpoint}/weapons`);
            const data = await resp.json();
            console.log('get weapons data: ' , data)
            return data.data;
        } catch (e) {
            console.log('Fetch Weapons had an issue', e);
        }
    }

    getshields = async () => {
        try {
            const resp = await fetch(`${Elden_Endpoint}/shields`);
            const data = await resp.json();
            console.log('get shields data: ' , data)
            return data.data;
        } catch (e) {
            console.log('Fetch Shields had an issue', e);
        }
    }

    deleteCharacter = async (character) => {
        try {
            const resp = await fetch(`${Elden_Endpoint}/${character.id}` , {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return await resp.json();
        } catch(e) {
            console.log('delete character had an issue.', e);
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
            const resp2 = await fetch(`${Elden_Endpoint}/${item.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item)
            });
            return resp2.json();
        } catch(e) {
            console.log('Updating Classes had an issue', e);
        }
    }

    putWeapon = async (weapon) => {
        try {
            const resp2 = await fetch(`${Elden_Endpoint}/${weapon.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(weapon)
            });
            return resp2.json();
        } catch(e) {
            console.log('Updating Weapons had an issue', e);
        }
    }

    putShield = async (shield) => {
        try {
            const resp2 = await fetch(`${Elden_Endpoint}/${shield.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(shield)
            });
            return resp2.json();
        } catch(e) {
            console.log('Updating Shields had an issue', e);
        }
    }

    postCharacter = async (character) => {
        try {
            const resp = await fetch(`${Elden_Endpoint}/classes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(character)
            });
            return await resp.json();
        } catch(e) {
            console.log('Oops, looks like updating houses had an issue.', e);
        }
    }

}


// export const eldenApi = new EldenApi();
