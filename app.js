const express = require('express');
const ExpressError = require('./expressError');
const app = express();
const { arrayValidator, mean, median, mode } = require('./helpers');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes

app.get('', function(req, res, next) {
  return res.status(200).json({message: "Enter some numbers as a url query."});
});

/**
 * If an array of numbers is passed in, sorts and returns
 * the mean value of the array.
 */
app.get('/mean', function(req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError('You must pass a query key of nums with a comma-separared list of integers.', 400);
  }

  const result = arrayValidator(req.query.nums);
  
  if (Array.isArray(result)) {
    return res.status(200).json({operation: "mean", value: mean(result)});
  }
  
  throw new ExpressError(result.message);
});

/**
 * If an array of numbers is passed in, sorts and returns
 * the median value of the array.
 */
app.get('/median', function(req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError('You must pass a query key of nums with a comma-separared list of integers.', 400);
  }
  const result = arrayValidator(req.query.nums);
  
  if (Array.isArray(result)) {
    return res.status(200).json({operaton: "median", value: median(result)});
  }

  throw new ExpressError(result.message);
});

/**
 * If an array of numbers is passed in, returns
 * an array of the most often repeated values.
 */
app.get('/mode', function(req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError('You must pass a query key of nums with a comma-separared list of integers.', 400);
  }

 const result = arrayValidator(req.query.nums);

  if (Array.isArray(result)) {
    return res.status(200).json({operaton: "mode", value: mode(result)});
  }
  
  throw new ExpressError(result.message);
});


// 404 handler
app.use(function(req, res, next) {
  const notFoundError = new ExpressError('Page not found!', 404);
  return next(notFoundError);
});


// Generic error handler
app.use(function(err, req, res, next) {
  let status = err.status || 500;
  let message = err.message;

  return res.status(status).json({
    error: {message, status}
  });
});


app.listen(3000, function() {
  console.log('Party is started on port 3000');
});