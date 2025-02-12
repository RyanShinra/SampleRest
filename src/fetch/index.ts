// Define interfaces for our data structures
interface Post {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

// Base URL for all requests
const baseURL = 'https://jsonplaceholder.typicode.com';

// GET - Fetch all posts
async function getPosts(): Promise<void> {
  try {
    const response = await fetch(`${baseURL}/posts`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const posts: Post[] = await response.json() as Post[];

    console.log('All posts:', posts);
  } catch (error) {
    console.error('Error fetching posts:', error instanceof Error ? error.message : 'Unknown error');
  }
}

// GET - Fetch single post
async function getPost(id: number): Promise<void> {
  try {
    const response = await fetch(`${baseURL}/posts/${id}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const post: Post = await response.json() as Post;
    console.log('Single post:', post);
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
    const response = await fetch(`${baseURL}/posts`, {
      method: 'POST',
      body: JSON.stringify(newPost),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const createdPost: Post = await response.json() as Post;
    console.log('Created post:', createdPost);
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
    const response = await fetch(`${baseURL}/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedPost),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const updated: Post = await response.json() as Post;
    console.log('Updated post:', updated);
  } catch (error) {
    console.error('Error updating post:', error instanceof Error ? error.message : 'Unknown error');
  }
}

// DELETE - Delete a post
async function deletePost(id: number): Promise<void> {
  try {
    const response = await fetch(`${baseURL}/posts/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    console.log('Delete response:', response.status);
  } catch (error) {
    console.error('Error deleting post:', error instanceof Error ? error.message : 'Unknown error');
  }
}

// Run examples
export async function runFetchExamples(): Promise<void> {
  await getPosts();
  await getPost(1);
  await createPost();
  await updatePost(1);
  await deletePost(1);
}

// Execute the examples
runFetchExamples()
  .catch(error => console.error('Error in examples:', error instanceof Error ? error.message : 'Unknown error'));
