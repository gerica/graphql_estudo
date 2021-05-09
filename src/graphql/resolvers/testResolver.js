export default {
  test: () => 'Hello world!',
  ip(args, request) {
    return request.ip;
  },
};
