import { test, expect } from '@playwright/test';

test.describe.serial('REST API Tests', () => {

    let id: string;

    test('@smoke GET /api/users - should return a list of users', async ({ request }) => {
        const response = await request.get('https://api.restful-api.dev/objects');
        expect(response.status()).toBe(200);
        const users = await response.json();
        expect(Array.isArray(users)).toBe(true);
    });

    test('@regression get user by id', async ({ request }) => {
        const response = await request.get('https://api.restful-api.dev/objects/7');
        expect(response.status()).toBe(200);
        const user = await response.json();
        console.log(user.id)
    });

    test('@regression create a new user', async ({ request }) => {
        const newDetail = {
            "name": "Apple MacBook Pro 16",
            "data": {
                "year": 2019,
                "price": 1849.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB"
            }
        };
        const response = await request.post('https://api.restful-api.dev/objects', {
            data: newDetail
        });
        expect(response.status()).toBe(200);
        const createdUser = await response.json();
        expect(createdUser).toHaveProperty("createdAt");
       id = createdUser.id;
        console.log(createdUser);

    })

    test('@regression update user details', async ({ request }) => {
        const updatedDetail = {
            "name": "Apple MacBook Pro 16",
            "data": {
                "year": 2020,
                "price": 1999.99,   
                "CPU model": "Apple M1 Pro",
                "Hard disk size": "2 TB"
            }   
        };
        const response = await request.put(`https://api.restful-api.dev/objects/${id}`, {
            data: updatedDetail
        });
        expect(response.status()).toBe(200);
        const updatedUser = await response.json();
        expect(updatedUser.data.year).toBe(2020);
        console.log(updatedUser);
    })

    test('@regression delete a user', async ({ request }) => {
        const response = await request.delete('https://api.restful-api.dev/objects/' + id);
        expect(response.status()).toBe(200);
    })  
});
