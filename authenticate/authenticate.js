// const jwt = require('jsonwebtoken');

// const jwtKey = process.env.JWT_SECRET

// function authenticate(req, res, next) {
//     const token = req.headers.authorization;

//     if(token) {
//         jwt.verify(token, jwtKey, (err, decodedToken) => {
//             if(err) {
//                 res.status(401).json({message: `invalid token`})
//             } else {
//                 req.decodedToken = decodedToken;
//                 next();
//             }
//         })
//     } else {
//         res.status(401).json({ message: `no token provided` })
//     }
// };

// module.exports = {
//     authenticate
// }