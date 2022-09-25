const User = require("../models/users");

//Register
// check is the email already exists
// if doesnt exist yet then create a new account
const registerController = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user != null) {
      return res.send("username already taken.");
    } else {
      const user = new User({
        username: req.body.username,
        password: req.body.password,
      });

      const newUser = await user.save();
      res.status(201).json(newUser);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Login
// check email exist or not
// if exist then check password is match with the corresponding email
// if match login

//get all users data
const userList = (req, res) => {
  User.find((err, users) => {
    res.send(users);
  });
};

module.exports = { registerController, userList };
