const users = [
    {
        "id": "45ec0ce7-95da-4264-b5fb-57bbe6a9124a",
        "first": "yaakov",
        "last": "yaakov",
        "email": "my@email.com",
        "password": "abc123",
        "playerIds": []
    },
    {
        "id": "b1d1507d-f15a-4d8a-922e-1bacd410c616",
        "first": "yaakov2",
        "last": "yaakov2",
        "email": "my2@email.com",
        "password": "abc123",
        "playerIds": []
    }
]
const email = 'my2@email.com';
const pass = 'abc123';

users.filter(u => u.password === pass && u.email === email);