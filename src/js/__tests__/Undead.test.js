import Undead from '../classes/Undead';

test('Правильно создается объект', () => {
  const undead = new Undead('aaa', 'Undead');
  const result = {
    attack: 25, defence: 25, health: 100, level: 1, name: 'aaa', type: 'Undead',
  };

  expect(undead).toEqual(result);
});
