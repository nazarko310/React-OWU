import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

const getUser = () => axiosInstance('/users');
const getAlbum = () => axiosInstance('/albums')
const getPhotos = () => axiosInstance('/photos')
const getAlbumsOfUser = (id) => axiosInstance(`/users/${id}/albums`)
const getPhotosOfAlbum = (id) => axiosInstance(`/users/${id}/albums`)

export {getUser, getAlbum, getAlbumsOfUser, getPhotosOfAlbum, getPhotos}