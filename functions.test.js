const functions = require('./functions');
//toBe
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2,2)).toBe(4);
});

//not.toBe
test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2,2)).not.toBe(5);
});

//toBeNull
test('Should be a null', () => {
    expect(functions.isNull()).toBeNull();
});

//toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkVlaue()).toBeFalsy();
});

//.toStrictEqual or .toEqual
test('Should be Brad Traversy object', () => {
    expect(functions.createUser()).toStrictEqual({
        firstName: 'Brad',
        lastName: 'Traversy'
    });
});

//less than and greater than
test('should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
})

//Regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/);
})
//toContain
test('Admin should be in usernames', () => {
    usernames = ['john', 'brad', 'admin'];
    expect(usernames).toContain('admin');
})

//working with async data

// //Promise
// test('User fetched name should be Leanne Graham', () => {
//     //both assertions and return should be there 
//     // while working with async data
//     expect.assertions(1);
//     return functions.fetchUser()
//     .then(data => {
//         expect(data.name).toEqual('Leanne Graham');
//     })
// })


//async await
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});