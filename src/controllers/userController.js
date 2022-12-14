import users from "../models/user.js";

export default class UserController {

  static getUsers = async (req, res) => {
    try {
      const { page = 1, limit = 3, search = '' } = req.query;

      const pageNumber = Number(page);
      const limitNumber = Number(limit);

      const count = await users.countDocuments({name: {$regex: search, $options: 'i'}});

      const data = await users
        .find({name: {$regex: search, $options: 'i'}})
        .select("-password")
        .limit(limitNumber * 1)
        .skip((pageNumber - 1) * limitNumber)
        .exec();

      const resultData = {
        data,
        page: pageNumber,
        limit: limitNumber,
        totalElements: count,
        totalPages: Math.ceil(count / limitNumber),
      };

      res.status(200).json(resultData);
    } catch (e) {
      res.status(500).send({
        message: `${e.message} - could not get users.`,
      });
    }

  };

  static getUserById = async (req, res) => {
    try {
      let id = req.params.id;
      const result = await users.findById(id).select("-password");

      res.status(200).send(result);
    } catch (e) {
      res
          .status(404)
          .send({ message: `${e.message} - user not found` });
    }
  };

  static addUser = async (req, res) => {
    try {
      const user = new users(req.body);
      const result = await user.save();
      res.status(201).send(result.toJSON());

    } catch (e) {
      res
          .status(500)
          .send({ message: `${e.message} - could not add user.` });
    }
  };

  static updateUser = async (req, res) => {
    try {
      const id = req.params.id;
      await users.findByIdAndUpdate(id,{ $set: req.body});
      res.status(200).send({ message: "User successfully updated!" });
    } catch (e) {
      res.status(404).send({
        message: `${e.message} - user not found or updating went wrong.`,
      });
    }
  };

  static deleteUser = async (req, res) => {
    try {
      const id = req.params.id;
      await users.findByIdAndDelete(id);
      res.status(204).send();
    } catch (e) {
      res.status(404).send({
        message: `${e.message} - user not found or deleting went wrong.`,
      });
    }
  };
}
