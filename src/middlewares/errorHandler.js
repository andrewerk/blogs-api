const errorHandler = (err, _req, res, _next) => {
    const error = JSON.parse(err.message);
    res.status(error.status || 500).json({ message: error.message }
        || { message: 'Internal Server Error' });
  };
  
module.exports = errorHandler;