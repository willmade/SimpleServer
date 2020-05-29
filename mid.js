// sample of middleware
const wxo1 = (req, res, next) => {
  console.log('some middleware');

  /* all middleware must have the next()
   * called at the end of code block
   * for a complete request-response
   * cycle to take place */
  next();
};

const wxo2 = (req, res, next) => {
  console.log('wxo2');
  next();
};

module.exports = { wxo1, wxo2 };
