const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {
  let users;
  beforeEach(() => {
    users = new Users();
    users.users = [
      { id: '1', name: 'Mike', room: 'Node Course' },
      { id: '2', name: 'Jen', room: 'React Course' },
      { id: '3', name: 'Julie', room: 'Node Course' }
    ]
  });

  it('should add new user', () => {
    let users = new Users();
    let user = {
      id: '123',
      name: 'Daniel',
      room: 'The Office Fans'
    };
    let resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    let id = '3';
    let user = users.removeUser(id);
    expect(user.id).toBe(id);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    let user = users.removeUser('99');
    expect(user).toBeFalsy();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    let id = '1';
    let user = users.getUser(id);
    expect(user.id).toBe(id);
  });

  it('should not find user', () => {
    let user = users.getUser('99');
    expect(user).toBeFalsy();
  });

  it('should return names for node course', () => {
    let userList = users.getUserList('Node Course');
    expect(userList).toEqual(['Mike', 'Julie']);
  });

  it('should return names for react course', () => {
    let userList = users.getUserList('React Course');
    expect(userList).toEqual(['Jen']);
  });
});
