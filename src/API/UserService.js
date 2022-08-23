import axios from 'axios';

export default class UserService {
  static async getAllUsers() {
    const response = await axios.get('https://gorest.co.in/public/v2/users');
    return response;
  }
}
