import Validator from '../Validator';

const valuesPositive = [
  ['fdsf-sd', 'valid', true],
  ['Gasd112h', 'valid', true],
  ['fd_12sd', 'valid', true],
  ['fdsf-sd', 'valid', true],
  ['1fdsf-sd', 'invalid', false],
  ['Gasd112', 'invalid', false],
  ['fd_1231sd', 'invalid', false],
  ['fdавf-sd', 'invalid', false],
]


test.each(valuesPositive)('nickname %s is %s', (nickname, valid, result) => {
  expect(Boolean(new Validator(nickname).validateUsername())).toBe(result);
});