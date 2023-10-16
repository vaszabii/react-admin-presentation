module.exports = (req, resp, next) => {
  resp.header("Access-Control-Expose-Headers", "Content-Range");
  resp.header("Content-Range", "post 0-20/20");
  next();
};
