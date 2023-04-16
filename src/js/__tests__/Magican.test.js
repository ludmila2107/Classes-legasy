import Magican from '../classes/Magican';

test('Правильно создается объект', () => {
  const magican = new Magican('aaa', 'Magican');
  const result = {
    attack: 10, defence: 40, health: 100, level: 1, name: 'aaa', type: 'Magican',
  };

  expect(magican).toEqual(result);
});
