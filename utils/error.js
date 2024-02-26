function error(msg = "somethings went wrong", status = 500) {
  const err = new Error(msg);
  err.status = err;
  return err;
}

module.exports = { error };
