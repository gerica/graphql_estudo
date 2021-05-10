/* eslint-disable class-methods-use-this */
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import { User } from '../models';
import { JWT_SECRET } from '../../utils/constants';
import logger from '../../utils/logger';

const fakeDatabase = [];
let currentId = -1;
class UserService {
  async register({ login, password }) {
    logger.info('register');
    const user = await this.create({
      login,
      password: await bcrypt.hash(password, 10),
    });

    return jsonwebtoken.sign({ id: user.id, login: user.login }, JWT_SECRET, {
      expiresIn: '3m',
    });
  }

  async create(userData) {
    logger.info('create');
    return new Promise((resolve, reject) => {
      if (!userData) {
        reject(new Error('the data can not be null'));
      }
      logger.debug(currentId, 'current id');
      currentId += 1;
      const { login, password } = userData;
      const id = 1 + Math.floor(Math.random() * 100);
      const newUser = new User(id, login, password);
      fakeDatabase[currentId] = newUser;
      logger.info(newUser, 'New user created');
      setTimeout(() => resolve(newUser), 1000);
    });
  }

  async findOne(clauser) {
    return new Promise((resolve, reject) => {
      if (!clauser) {
        reject(new Error('the clause can not be null'));
      }
      setTimeout(() => resolve('sucess'), 1000);
    });
  }

  async current() {
    return new Promise((resolve, reject) => {
      if (!currentId) {
        reject(new Error('the data can not be null'));
      }
      setTimeout(() => resolve(fakeDatabase[currentId]), 1000);
    });
  }

  async allUsers() {
    logger.debug(fakeDatabase);
    return new Promise((resolve) => {
      setTimeout(() => resolve(fakeDatabase), 1000);
    });
  }
}
export default UserService;
