export default (req, res, next) => {
    console.log('This is an example middleware');
    next();
  };
  