import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { employeesApi, storage } from '../services';

const extraArgument = {
  employeesApi,
  storage,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      thunk: {
        extraArgument,
      },
    });
  },
});

export { extraArgument, store };
