/* eslint-disable class-methods-use-this */
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import { User } from '../models';
import { JWT_SECRET } from '../../utils/constants';

class UserService {
  async register({ login, password }) {
    console.log('register');
    const user = await this.create({
      login,
      password: await bcrypt.hash(password, 10),
    });

    return jsonwebtoken.sign({ id: user.id, login: user.login }, JWT_SECRET, {
      expiresIn: '3m',
    });
  }

  async create(userData) {
    console.log('Create user');
    return new Promise((resolve, reject) => {
      if (!userData) {
        reject(new Error('the data can not be null'));
      }
      const { login, password } = userData;
      const id = 1 + Math.floor(Math.random() * 100);
      setTimeout(() => resolve(new User(id, login, password)), 1000);
    });
  }

  async findOne(clauser) {
    console.log(clauser);
    return new Promise((resolve, reject) => {
      if (!clauser) {
        reject(new Error('the clause can not be null'));
      }
      setTimeout(() => resolve('sucess'), 1000);
    });
  }
}
export default UserService;
