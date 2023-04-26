const User = require("./user.model");

module.exports = {

  async listUsers(req, res) {
    try {
      const users = await User.find().populate({
        path: 'todos',
        select: 'title body',
      })

      res.status(201).json({ message: "Users found", data: users });
    } catch (err) {
      res.status(400).json(err);
    }
  },

  async showUser(req, res) {
    try {
      const { userId } = req.params

      const user = await User.findById(userId)

      res.status(201).json({ message: "User found", data: user });
    } catch (err) {
      res.status(400).json(err);
    }

  },

  createUser(req, res) {
    const data = req.body;

    const newUser = {
      ...data,
    };

    User.create(newUser)
      .then((user) => {
        res.status(201).json({ message: "User created", data: user });
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
};
