const User = require('./dbConfig')

beforeAll(async () => {
  await db('users').truncate();
});

describe('User Model', () => {
  it('returns empty array initially', async () => {
    const users = await User.getAllUsers();
    expect(users).toBe([]);
  });
});
