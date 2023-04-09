import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
// import { contactsApi } from './contacts/contactsApi';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

// export const store = configureStore({
//   reducer: {
//     contacts: contactsSlice.reducer,
//     [contactsApi.reducerPath]: contactsApi.reducer,
//   },
//   middleware: getDefaultMiddleware => [
//     ...getDefaultMiddleware(),
//   contactsApi.middleware,
//   ],
// });
