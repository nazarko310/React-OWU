import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});
const getUsers = () => axiosInstance('/users')
const getPostsFromUsers = (id) => axiosInstance(`/users/${id}/posts`)
const getPosts = () => axiosInstance(`/posts`)
const getComments = () => axiosInstance(`/comments`)
const getCommentsFromPost = (id) => axiosInstance(`/posts/${id}/comments`)
export {getUsers, getPostsFromUsers, getPosts, getCommentsFromPost, getComments}
