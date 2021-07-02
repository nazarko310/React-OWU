import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

const getUsers = () => axiosInstance(`/users`);
const getPostsFromUser = (id) => axiosInstance(`/users/${id}/posts`);
const getCommentsFromPosts = (id) => axiosInstance(`/posts/${id}/comments`);


export {getUsers, getPostsFromUser, getCommentsFromPosts};