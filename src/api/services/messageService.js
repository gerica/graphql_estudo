/* eslint-disable class-methods-use-this */
import { Message } from '../models';

const fakeDatabase = {};

class MessageService {
  constructor(id, input) {
    if (id && input) {
      const { content, author } = input;
      this.message = new Message(id, { content, author });
    } else if (id) {
      this.message = new Message(id, {});
    } else if (input) {
      const { content, author } = input;
      this.message = new Message(null, { content, author });
    }
  }

  getMessage() {
    console.log(fakeDatabase);
    const { id } = this.message;
    if (!fakeDatabase[id]) {
      throw new Error(`no message exists with id ${id}`);
    }
    return new Message(id, fakeDatabase[id]);
  }

  toString() {
    return 'Service message';
  }

  createMessage() {
    console.log(this.message);
    // Create a random id for our "database".
    const id = 1 + Math.floor(Math.random() * 10000);
    this.message.id = id;
    fakeDatabase[this.message.id] = this.message;
    console.log(fakeDatabase);
    return this.message;
  }

  updateMessage() {
    if (!fakeDatabase[this.message.id]) {
      throw new Error(`no message exists with id ${this.message.id}`);
    }
    // This replaces all old data, but some apps might want partial update.
    fakeDatabase[this.message.id] = this.message;
    return this.message;
  }
}
export default MessageService;
