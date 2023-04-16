import Daemon from '../classes/Daemon';

test('Правильно создается объект', () => {
  const daemon = new Daemon('aaa', 'Daemon');
  const result = {
    attack: 10, defence: 40, health: 100, level: 1, name: 'aaa', type: 'Daemon',
  };

  expect(daemon).toEqual(result);
});
