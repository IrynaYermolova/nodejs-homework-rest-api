// const { User } = require('../../models/user');
// const bcrypt = require('bcrypt');
// const { joiRegister } = require('../../models/user')
// const { Conflict, BadRequest } = require("http-errors");
// // const gravatar = require('gravatar');
// // const { v4 } = require('uuid');
// const sendEmail = require('../../routes/api/servises/sendEmail')

// const register = async (req, res, next) => {
//     try {
//         const { name, email, password } = req.body;
//         const { error } = joiRegister.validate(req.body);
//         if (error) {
//             throw new BadRequest(error.message);
//         }
    
//     const user = await User.findOne({ email });
//     if (user) {
//         throw new Conflict("Email in use");
//     }
    
//     const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

//     // const avatarURL = gravatar.url(email)
    
//     // const verificationToken = v4();
        
//     // const newUser = await User.create({ name, email, password: hashPassword, avatarURL, verificationToken });
    
//         const newUser = await User.create({ name, email, password: hashPassword });
//     const mail = {
//         to: email,
//         subject: "Verify your mail!",
//     //     html: `<a target="_blank" href="http://localhost:3000/api/auth/veryfy/${verificationToken}">Click me to verify!</a>`
//     };

//     sendEmail(mail);
        
//     res.status(201).json({
//         status: "success",
//         code: 201,
//         user: {
//             email: newUser.email,
//             subscription: newUser.subscription,
//             avatar: newUser.avatarURL
//         }
//       })
//     } catch (error) {
//         next(error);
//     }
// }

// module.exports = register;

// const bcrypt = require("bcrypt");
// const { User } = require("../../models/user");
// const { HttpError } = require("../../helpers/HttpError");

// const register = async (req, res) => {
//   const body = req.body;

//   const { email, password } = body;
//   const user = await User.findOne({ email });
//   if (user) {
//     throw HttpError(409, "Email already in use");
//   }

//   const hashPassword = await bcrypt.hash(password, 10);

//   const newUser = await User.create({ ...body, password: hashPassword });
//   res
//     .status(201)
//     .json({ email: newUser.email, subscription: newUser.subscription });
// };

// module.exports = register;

// const bcrypt = require("bcryptjs");
// const { User } = require("../../models/user");
// const { HttpError } = require("../../helpers");
// const gravatar = require("gravatar");

// const register = async (req, res) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email });

//     if (user) {
//       throw HttpError(409, "Email already in use");
//     }

//     const hashPassword = await bcrypt.hash(password, 10);
//     const avatarURL = gravatar.url(email);
//     const newUser = await User.create({ ...req.body, password: hashPassword, avatarURL });
  
//     res.status(201)
//        .json({ email: newUser.email,
//              name: newUser.name });
// };

// module.exports = register;

// const { User } = require("../../models/user");
// // const { HttpError } = require("../../helpers");


// const register = async (req, res) => {
//   // const { email } = req.body;
//   // const user = await User.findOne({ email });

//   //   if (user) {
//   //     throw HttpError(409, "Email already in use");
//   // }

//   const newUser = await User.create(req.body);
  
//   res.status(201)
//      .json({ email: newUser.email,
//            name: newUser.name });
//   // };
// }

// module.exports = register;

// const bcrypt = require("bcrypt");
// const { User } = require("../../models/user");
// const { HttpError } = require("../../helpers");

// const register = async (req, res) => {
//   const body = req.body;

//   const { email, password } = body;
//   const user = await User.findOne({ email });
//   if (user) {
//     throw HttpError(409, "Email already in use");
//   }

//   const hashPassword = await bcrypt.hash(password, 10);

//   const newUser = await User.create({ ...body, password: hashPassword });
//   res
//     .status(201)
//     .json({ email: newUser.email, subscription: newUser.subscription });
// };

// module.exports = register;

// const bcrypt = require("bcrypt");
// const { User } = require("../../models/user");
// const { HttpError } = require("../../helpers");

// const register = async (req, res) => {
//   const body = req.body;

//   const { email, password } = body;
//   const user = await User.findOne({ email });
//   if (user) {
//     throw HttpError(409, "Email already in use");
//   }

//   const hashPassword = await bcrypt.hash(password, 10);

//   const newUser = await User.create({ ...body, password: hashPassword });
//   res
//     .status(201)
//     .json({ email: newUser.email, subscription: newUser.subscription });
// };

// module.exports = register;






const bcrypt = require("bcrypt");
const { Conflict } = require("http-errors");

const { User } = require("../../models/user");

const register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      throw new Conflict("Email in use");
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      ...req.body,
      password: hashPassword,
    });

    res.status(201).json({
      user: {
        email: newUser.email,
        subscription: newUser.subscription,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = register;