const {
  CONNECT_MONGO_URL,
  // Workaround: For generate window.process on frontend by next.js
} = (process || {}).env;

module.exports = {
  CONNECT_MONGO_URL,
};
