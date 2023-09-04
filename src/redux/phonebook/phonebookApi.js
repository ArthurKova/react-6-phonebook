import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const phoneBookApi = createApi({
  reducerPath: 'phoneBookApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://64ecb809f9b2b70f2bfad5b4.mockapi.io/',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    getAllPhonebook: builder.query({
      query: () => `phonebook/`,
      providesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `phonebook/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
    addNewContact: builder.mutation({
      query: payload => ({
        url: 'phonebook/',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useGetAllPhonebookQuery,
  useDeleteContactMutation,
  useAddNewContactMutation,
} = phoneBookApi;
