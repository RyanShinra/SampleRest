"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runAxiosExamples = runAxiosExamples;
const axios_1 = __importDefault(require("axios"));
// interface ApiResponse<T> {
//   data: T;
//   status: number;
//   statusText: string;
// }
// Base URL for all requests
const baseURL = 'https://jsonplaceholder.typicode.com';
// GET - Fetch all posts
async function getPosts() {
    try {
        const response = await axios_1.default.get(`${baseURL}/posts`);
        console.log('All posts:', response.data);
    }
    catch (error) {
        console.error('Error fetching posts:', error instanceof Error ? error.message : 'Unknown error');
    }
}
// GET - Fetch single post
async function getPost(id) {
    try {
        const response = await axios_1.default.get(`${baseURL}/posts/${id}`);
        console.log('Single post:', response.data);
    }
    catch (error) {
        console.error('Error fetching post:', error instanceof Error ? error.message : 'Unknown error');
    }
}
// POST - Create a new post
async function createPost() {
    try {
        const newPost = {
            title: 'My New Post',
            body: 'This is the content of my post',
            userId: 1
        };
        const response = await axios_1.default.post(`${baseURL}/posts`, newPost);
        console.log('Created post:', response.data);
    }
    catch (error) {
        console.error('Error creating post:', error instanceof Error ? error.message : 'Unknown error');
    }
}
// PUT - Update a post
async function updatePost(id) {
    try {
        const updatedPost = {
            id,
            title: 'Updated Title',
            body: 'Updated content',
            userId: 1
        };
        const response = await axios_1.default.put(`${baseURL}/posts/${id}`, updatedPost);
        console.log('Updated post:', response.data);
    }
    catch (error) {
        console.error('Error updating post:', error instanceof Error ? error.message : 'Unknown error');
    }
}
// DELETE - Delete a post
async function deletePost(id) {
    try {
        const response = await axios_1.default.delete(`${baseURL}/posts/${id}`);
        console.log('Delete response:', response.status);
    }
    catch (error) {
        console.error('Error deleting post:', error instanceof Error ? error.message : 'Unknown error');
    }
}
// Run examples
async function runAxiosExamples() {
    await getPosts();
    await getPost(1);
    await createPost();
    await updatePost(1);
    await deletePost(1);
}
// Execute the examples
runAxiosExamples()
    .catch(error => console.error('Error in examples:', error instanceof Error ? error.message : 'Unknown error'));
//# sourceMappingURL=index.js.map