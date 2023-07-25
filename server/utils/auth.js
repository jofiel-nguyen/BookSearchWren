const jwt = require('jsonwebtoken');

// Set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  // Function for our authenticated routes
  authMiddleware: function (req, res, next) {
    // Check if the token is sent via the authorization header or query parameter
    let token = req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      // Token sent via the authorization header (format: "Bearer <token>")
      const [bearer, tokenValue] = token.split(' ');
      if (bearer === 'Bearer' && tokenValue) {
        token = tokenValue;
      } else {
        // Invalid authorization header format
        return res.status(400).json({ message: 'Invalid authorization header format!' });
      }
    } else if (!token) {
      // No token found in either authorization header or query parameter
      return res.status(400).json({ message: 'You have no token!' });
    }

    // Verify token and get user data out of it
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
      return res.status(400).json({ message: 'Invalid token!' });
    }

    // Send to the next endpoint
    next();
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
