import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});
const getUsers = () => axiosInstance(`/users`)
const getAlbumsFromUsers = (id)=> axiosInstance(`/users/${id}/albums`)
const getPhotosFromAlbums = (id)=> axiosInstance(`/albums/${id}/photos`)


export {getUsers, getAlbumsFromUsers, getPhotosFromAlbums};