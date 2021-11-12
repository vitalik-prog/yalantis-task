import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { employeesApi, storage, notification } from '../services';

const extraArgument = {
  employeesApi,
  storage,
  notification,
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
