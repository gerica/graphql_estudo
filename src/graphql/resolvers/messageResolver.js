import MessageService from '../../api/services/messageService';

export default {
  messageService: ({ id }) => new MessageService(id),
  messageServiceCreate: ({ input }) => new MessageService(null, input),
  messageServiceUpdate: ({ id, input }) => new MessageService(id, input),
};
