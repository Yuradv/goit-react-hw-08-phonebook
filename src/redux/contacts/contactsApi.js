import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6431d7463adb15965174fc46.mockapi.io/api/v1/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, {rejectWithValue}) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, {rejectWithValue}) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const { data: {id} } = await axios.delete(`/contacts/${contactId}`);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const contactsApi = createApi({
//   reducerPath: 'contactsApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://6431d7463adb15965174fc46.mockapi.io/api/v1/',
//   }),
//   tagTypes: ['Contacts'],
//   endpoints: builder => ({
//     fetchContacts: builder.query({
//       query: () => '/contacts',
//       providesTags: ['Contacts'],
//     }),
//     addContact: builder.mutation({
//       query: newContact => ({
//         url: '/contacts',
//         method: 'POST',
//         body: newContact,
//       }),
//       invalidatesTags: ['Contacts'],
//     }),
//     deleteContact: builder.mutation({
//       query: contactId => ({
//         url: `/contacts/${contactId}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['Contacts'],
//     }),
//   }),
// });

// export const { useFetchContactsQuery, useAddContactMutation, useDeleteContactMutation } = contactsApi;
