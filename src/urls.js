import { API_KEY } from "./constants/constants";
export const trending=`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
export const original=`discover/tv?api_key=${API_KEY}&with_networks=213`
export const action=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`
export const comedy=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`
export const Horror=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`
export const Romance=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`