export async function fetchSampleUsers() {
    try {
        const key = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if(!key.ok) {
            throw new Error(`Request failed with status. ${key.status}`);
        }
        const user = await key.json();

        return user.map(({id,name,email}) => ({ id,name,email}));
    }
    catch (error) {
        console.error('fetchSampleUsers error:', error);
        return [];
    }
    finally {
        console.log('fetchSampleUsers attempt complete');
    }
}

export function fetchSampleUsersPromise() {
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then((key) => {
        if (!key.ok) {
            throw new Error(`Error with status ${key.status}`);
        }
        return key.json();
    })
    .then((user) => user.map(({ id, name, email}) => ({ id, name, email})))
    .catch((error) => {
        console.error('fetchSampleUsersPromise error:', error);
        return [];
    });
}