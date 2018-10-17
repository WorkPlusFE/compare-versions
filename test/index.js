import test from 'ava';
import CompareVersions from '../';

test('will return 1', t => {
  const aVersion = '3.13.2';
  const bVersion = '3.23.0';
  const result = CompareVersions(bVersion, aVersion, 2);
  t.deepEqual(result, 1);
});

test('will return 0', t => {
  const aVersion = '3.1111.20';
  const bVersion = '3.1111.20';
  const result = CompareVersions(bVersion, aVersion);
  t.deepEqual(result, 0);
});

test('will return -1', t => {
  const aVersion = '5.2';
  const bVersion = '1.3';
  const result = CompareVersions(bVersion, aVersion);
  t.deepEqual(result, -1);
});

test('will return null', t => {
  const aVersion = '3.3.0';
  const bVersion = '3.1';
  const result = CompareVersions(bVersion, aVersion);
  t.deepEqual(result, null);
});
