import Zombie from '../classes/Zombie';

test('Правильно создается объект', () => {
  const zombie = new Zombie('aaa', 'Zombie');
  const result = {
    attack: 40, defence: 10, health: 100, level: 1, name: 'aaa', type: 'Zombie',
  };

  expect(zombie).toEqual(result);
});
