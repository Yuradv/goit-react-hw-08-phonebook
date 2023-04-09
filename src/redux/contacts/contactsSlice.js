import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './contactsApi';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
  },
  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload.toLowerCase();
    },
  },
  extraReducers: {
    //Fetch
    [fetchContacts.fulfilled]: (state, { payload }) => ({
      ...state,
      items: payload,
      isLoading: false,
      error: null,
    }),
    [fetchContacts.pending]: state => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [fetchContacts.rejected]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),
    //Add
    [addContact.fulfilled]: (state, { payload }) => ({
      ...state,
      items: [...state.items, payload],
      isLoading: false,
      error: null,
    }),
    [addContact.pending]: state => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [addContact.rejected]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),
    //Delete
    [deleteContact.fulfilled]: (state, { payload }) => ({
      ...state,
      items: state.items.filter(({ id }) => id !== payload),
    }),
    [deleteContact.pending]: state => ({
      ...state,
      isLoading: false,
      error: null,
    }),
    [deleteContact.rejected]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { filterContacts } = contactsSlice.actions;

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     filter: '',
//   },
//   reducers: {
//     saveContacts(state, action) {
//       state.items.push(action.payload);
//     },
//     deleteContacts(state, action) {
//       state.items = state.items.filter(
//         contact => contact.id !== action.payload
//       );
//     },
//     filterContacts(state, action) {
//       state.filter = action.payload;
//     },
//   },
// });

// export const { saveContacts, deleteContacts, filterContacts } =
//   contactsSlice.actions;
