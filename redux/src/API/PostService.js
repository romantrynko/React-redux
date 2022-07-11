import axios from 'axios';

export default class PostService {
  static async getAll() {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    return response;
  }

  static async getPostById(id) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return response;
  }

  static async getCommentsById(id) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    return response;
  }
}
