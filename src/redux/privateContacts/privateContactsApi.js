import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://connections-api.herokuapp.com',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const privateContactsApi = createApi({
  reducerPath: 'privateContactsApi',
  baseQuery,
  tagTypes: ['Contacts'],
  keepUnusedDataFor: 5,
  endpoints: builder => ({
    getAllPrivateContacts: builder.query({
      query: () => ({
        url: `/contacts`,
        method: 'GET',
      }),
      providesTags: ['Contacts'],
    }),
    deletePrivateContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    addNewPrivateContact: builder.mutation({
      query: payload => ({
        url: '/contacts',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useAddNewPrivateContactMutation,
  useGetAllPrivateContactsQuery,
  useDeletePrivateContactMutation,
} = privateContactsApi;
