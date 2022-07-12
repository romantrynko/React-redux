import axios from 'axios';

export default class PostService {
  static async getAll() {
    const response = await axios.get('https://gorest.co.in/public/v2/posts');
    return response;
  }

  static async getPostById(id) {
    const response = await axios.get(
      `https://gorest.co.in/public/v2/posts/${id}`
    );
    return response;
  }

  static async getCommentsById(id) {
    const response = await axios.get(
      `https://gorest.co.in/public/v2/posts/${id}/comments`
    );
    return response;
  }
}
