const {
  SITE_URL,
  // Workaround: For generate window.process on frontend by next.js
} = (process || {}).env;

module.exports = {
  SITE_URL,
};
