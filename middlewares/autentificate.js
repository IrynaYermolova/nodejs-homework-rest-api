const jwt = require("jsonwebtoken");
const { Unauthorized } = require("http-errors");

const { User } = require("../models/user");
const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    next(Unauthorized());
  }

  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);

    if ( !user.token) {
      next(Unauthorized("Not authorized"));
    }
    req.user = user;
    next();
  } catch (error) {
    next(Unauthorized("Not authorized"));
  }
};

module.exports = authenticate;

// const jwt = require('jsonwebtoken');
// const { User } = require('../models/user');
// const { HttpError } = require('../helpers/HttpError');
// const { SECRET_KEY } = process.env;

// const autenticate = async (req, res, next) => {
//     const { authorization = "" } = req.headers;
//     const [bearer, token] = authorization.split(" ");
//     if (bearer !== "Bearer") {
//       next(HttpError(401));
//     }
//     try {
//       const { id } = jwt.verify(token, SECRET_KEY);
//       const user = await User.findById(id);
//       if (!user) {
//         next(HttpError(401));
//       }
//       req.user = user;
//       next();
//     } catch (error) {
//       next(HttpError(401));
//     }
//   };
  
//   module.exports = autenticate;