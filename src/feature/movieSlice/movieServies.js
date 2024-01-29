import axios from "axios";

const token = import.meta.env.VITE_APP_TOKEN
const API_URL = "https://api.themoviedb.org/3/"
const config = {
    headers: {
        Authorization: `Bearer ${token}`,
    },
};

export const upcomingMovie = async (pageNum) => {
    const res = await axios.get(`${API_URL}/movie/upcoming?language=en-US&page=${pageNum}`, config)
    // localStorage.setItem("upcoming", JSON.stringify(res.data))
    return res.data
}
export const popular = async (pageNum) => {

    const res = await axios.get(`${API_URL}/movie/popular?language=en-US&page=${pageNum}`, config)
    return res.data
}
export const trending = async (pageNum) => {
    const res = await axios.get(`${API_URL}/trending/movie/day?language=en-US&page=${pageNum}`, config)
    return res.data
}

export const search = async (textsearch) => {

    const res = await axios.get(`${API_URL}/search/movie?query=${textsearch.query}&page=${textsearch.pageNum}`, config)
    return res.data
}

export const detail = async (id) => {
    const res = await axios.get(`${API_URL}/movie/${id}`, config)
    return res.data
}
//
// https://api.themoviedb.org/3/movie/{movie_id}
// https://api.themoviedb.org/3/movie/{movie_id}/credits
// https://api.themoviedb.org/3/search/multi?query=xcxc
// 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1

// const getTicket = async (id, token) => {
//     // const config = {
//     //   headers: {
//     //     Authorization: `Bearer ${token}`,
//     //   },
//     // };

//     const response = await axios.get(API_URL + id, config);
//     return response.data;
// };

// curl --request GET \
//      --url 'https://api.themoviedb.org/3/trending/movie/day?language=en-US' \
//      --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkN2MwMGM0MTU0NDNhZWY3NDhlNWYwMDdkMjE5OWUyNSIsInN1YiI6IjY1NjcxNTE2ODlkOTdmMDBlMTczN2ViZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ODMQiu3mfYSD-p9QwDDLVJqYNv0JXEoeoipJzU4QjWQ' \
//      --header 'accept: application/json'

// Upcoming movies data
// https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1