const { greet, nicolle } = require('../app');

test('greets the user by name', () => {
  expect(greet('DevOps')).toBe('Hello, DevOps!');
});
