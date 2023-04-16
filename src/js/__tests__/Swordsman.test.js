import Swordsman from '../classes/Swordsman';

test('Правильно создается объект', () => {
  const swordsman = new Swordsman('aaa', 'Swordsman');
  const result = {
    attack: 40, defence: 10, health: 100, level: 1, name: 'aaa', type: 'Swordsman',
  };

  expect(swordsman).toEqual(result);
});
