import axios, { AxiosResponse } from 'axios';

// Define interfaces for our data structures
interface Post {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

// interface ApiResponse<T> {
//   data: T;
//   status: number;
//   statusText: string;
// }

// Base URL for all requests
const baseURL = 'https://jsonplaceholder.typicode.com';

// GET - Fetch all posts
async function getPosts(): Promise<void> {
  try {
    const response: AxiosResponse<Post[]> = await axios.get(`${baseURL}/posts`);
    console.log('All posts:', response.data);
  } catch (error) {
    console.error('Error fetching posts:', error instanceof Error ? error.message : 'Unknown error');
  }
}

// GET - Fetch single post
async function getPost(id: number): Promise<void> {
  try {
    const response: AxiosResponse<Post> = await axios.get(`${baseURL}/posts/${id}`);
    console.log('Single post:', response.data);
  } catch (error) {
    console.error('Error fetching post:', error instanceof Error ? error.message : 'Unknown error');
  }
}

// POST - Create a new post
async function createPost(): Promise<void> {
  try {
    const newPost: Omit<Post, 'id'> = {
      title: 'My New Post',
      body: 'This is the content of my post',
      userId: 1
    };
    const response: AxiosResponse<Post> = await axios.post(`${baseURL}/posts`, newPost);
    console.log('Created post:', response.data);
  } catch (error) {
    console.error('Error creating post:', error instanceof Error ? error.message : 'Unknown error');
  }
}

// PUT - Update a post
async function updatePost(id: number): Promise<void> {
  try {
    const updatedPost: Post = {
      id,
      title: 'Updated Title',
      body: 'Updated content',
      userId: 1
    };
    const response: AxiosResponse<Post> = await axios.put(`${baseURL}/posts/${id}`, updatedPost);
    console.log('Updated post:', response.data);
  } catch (error) {
    console.error('Error updating post:', error instanceof Error ? error.message : 'Unknown error');
  }
}

// DELETE - Delete a post
async function deletePost(id: number): Promise<void> {
  try {
    const response: AxiosResponse = await axios.delete(`${baseURL}/posts/${id}`);
    console.log('Delete response:', response.status);
  } catch (error) {
    console.error('Error deleting post:', error instanceof Error ? error.message : 'Unknown error');
  }
}

// Run examples
export async function runAxiosExamples(): Promise<void> {
  await getPosts();
  await getPost(1);
  await createPost();
  await updatePost(1);
  await deletePost(1);
}

// Execute the examples
runAxiosExamples()
  .catch(error => console.error('Error in examples:', error instanceof Error ? error.message : 'Unknown error'));
