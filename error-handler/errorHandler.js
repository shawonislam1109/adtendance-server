module.exports = (app) => {
  app.use((error, req, res, next) => {
    switch (error.status) {
      case 400: {
        return res.status(400).json({ message: "Bad Request" });
      }
      case 401: {
        return res.status(401).json({ message: "Unauthorized" });
      }
      case 403: {
        return res.status(403).json({ message: "Forbidden" });
      }
      case 404: {
        return res.status(404).json({ message: "Not Found" });
      }
      case 422: {
        return res.status(422).json({ message: "Unprocessable Entity" });
      }
      case 500: {
        return res.status(500).json({ message: "Internal Server Error" });
      }
      default: {
        return res.status(500).json({ message: error.message });
      }
    }
  });
};
