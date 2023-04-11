const { UserService } = require('../services');
const jwt = require('../utils/jwt.utils');

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const user = await UserService.createNewUser({ displayName, email, password, image }); 
    const token = await jwt.createToken(user.dataValues);       
    return res.status(201).json({ token });
  } catch (err) {
    return err.message;
  }
};

module.exports = {
  createUser,
};