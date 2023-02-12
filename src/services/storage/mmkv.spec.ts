import storage, { mmkvStorage } from './mmkv';

// fixtures
const KEY = 'something';
const VALUE_OBJECT = { x: 1 };
const VALUE_STRING = JSON.stringify(VALUE_OBJECT);

describe('MMKV Test Suite', () => {
  beforeEach(() => {
    storage.set(KEY, VALUE_STRING);
  });

  afterEach(() => {
    storage.delete(KEY);
  });

  test('load', async () => {
    const value = await mmkvStorage.load(KEY);

    expect(value).toEqual(JSON.parse(VALUE_STRING));
  });

  test('loadString', async () => {
    const value = await mmkvStorage.loadString(KEY);

    expect(value).toEqual(VALUE_STRING);
  });

  test('save', async () => {
    await mmkvStorage.save(KEY, VALUE_OBJECT);

    expect(storage.getString(KEY)).toStrictEqual(VALUE_STRING);
  });

  test('saveString', async () => {
    await mmkvStorage.saveString(KEY, VALUE_STRING);

    expect(storage.getString(KEY)).toBe(VALUE_STRING);
  });

  test('remove', async () => {
    await mmkvStorage.remove(KEY);

    expect(storage.getString(KEY)).toBeUndefined();
  });

  test('clear', async () => {
    await mmkvStorage.clear();

    expect(storage.toString()).toStrictEqual('MMKV (mmkv.default): []');
  });
});
