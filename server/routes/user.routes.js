const Users = require('../controllers/user.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
  app.post("/api/register", Users.register);
  app.post("/api/login", Users.login);
  app.post("/api/logout", Users.logout);
  app.get("/api/alluser", authenticate,Users.alluser);
  app.get('/api/profil',Users.profil);
  app.get("/api/userlogedin" ,authenticate, (req, res) => {
    return res.json({ verified: true });
  });

  
  
}