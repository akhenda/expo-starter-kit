import { act } from '@testing-library/react-native';

const actualCreate = jest.requireActual('zustand');

// a variable to hold reset functions for all stores declared in the app
const storeResetFns = new Set();

// when creating a store, we get its initial state, create a reset function and add it in the set
const create = (createState) => {
  const store = actualCreate.default(createState);
  const initialState = store.getState();

  storeResetFns.add(() => {
    store.setState((draft) => {
      Object.assign(draft, initialState);
    }, true);
  });

  return store;
};

// Reset all stores after each test run
beforeEach(async () => {
  await act(() =>
    storeResetFns.forEach((resetFn) => {
      resetFn();
    }),
  );
});

export default create;
