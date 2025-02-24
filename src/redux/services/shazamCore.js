import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/', // Fixed base URL
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '3fce817624msh1cb7e3f6491bea8p1a3388jsnec6f30df0283'); // Using environment variable
      //headers.set('X-RapidAPI-Host', 'shazam-core.p.rapidapi.com');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => 'charts/world' }), // Fixed path
    getSongsByGenre: builder.query({ query: (genre) => `charts/genre-world?genre_code=${genre}` }), // Fixed path
    getSongsByCountry: builder.query({ query: (countryCode) => `charts/country?country_code=${countryCode}` }), // Fixed path
    getSongsBySearch: builder.query({ query: (searchTerm) => `search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }), // Fixed path
    getArtistDetails: builder.query({ query: (artistId) => `artists/details?artist_id=${artistId}` }), // Fixed path
    getSongDetails: builder.query({ query: ({ songid }) => `tracks/details?track_id=${songid}` }), // Fixed path
    getSongRelated: builder.query({ query: ({ songid }) => `tracks/related?track_id=${songid}` }), // Fixed path
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongsByGenreQuery,
  useGetSongsByCountryQuery,
  useGetSongsBySearchQuery,
  useGetArtistDetailsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} = shazamCoreApi;
