import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'






const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({

    getMovieByCategory: builder.query({
      query: () => ({
        url: '',
        headers: {
          'Authorization': ''
        },
        params: {
          page: 1
        }
      })
    }),









  })

});


export const { useGetMovieByCategoryQuery } = movieApi;

