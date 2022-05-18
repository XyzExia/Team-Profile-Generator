const Manager = require('../lib/Manager');

// creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager('testytest', 90, 'test@test.mail', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('testytest', 90, 'test@test.mail');

    expect(manager.getRole()).toEqual("Manager");
}); 
