import Bowman from '../classes/Bowman';

test('Правильно создается объект', () => {
  const bowman = new Bowman('aaa', 'Bowman');
  const result = {
    attack: 25, defence: 25, health: 100, level: 1, name: 'aaa', type: 'Bowman',
  };

  expect(bowman).toEqual(result);
});
