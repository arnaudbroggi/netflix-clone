const API_KEY = "eb9534dbd7191150248f7f5c37eafacd";

const requests = [
  {
    fetchKey: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    name: "NETFLIX ORIGINALS",
    isLargerRow: true,
  },
  {
    fetchKey: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    name: "Top Rated",
    isLargerRow: false,
  },
  {
    fetchKey: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    name: "Trending Now",
    isLargerRow: false,
  },
  {
    fetchKey: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    name: "Action Movies",
    isLargerRow: false,
  },
  {
    fetchKey: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    name: "Comedy Movies",
    isLargerRow: false,
  },
  {
    fetchKey: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    name: "Romance Movies",
    isLargerRow: false,
  },

  {
    fetchKey: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    name: "Horror Movies",
    isLargerRow: false,
  },

  {
    fetchKey: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    name: "Documentaries",
    isLargerRow: false,
  },
];
export default requests;
