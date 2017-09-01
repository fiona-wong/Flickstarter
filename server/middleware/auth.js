const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const redisClient = require('redis').createClient(process.env.REDIS_URL || '');

module.exports.verify = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};

module.exports.session = session({
  store: new RedisStore({
    client: redisClient,
    host: 'ec2-52-21-74-44.compute-1.amazonaws.com' || 'localhost',
    port: 6379

  }),
  secret: 'more laughter, more love, more life',
  resave: false,
  saveUninitialized: false
});
