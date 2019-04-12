import test from 'ava';
import main from '../dist/main';

test('Dummy test', t => {
  const x = main().next();
  t.is(x.value, 1);
});
