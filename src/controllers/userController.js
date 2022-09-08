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
        message: `${e.message} - não foi possível encontrar os usuários.`,
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
          .send({ message: `${e.message} - ID do livro não foi localizado` });
    }
  };

  static addUser = (req, res) => {
    const user = new users(req.body);
    user.save((e) => {
      if (e) {
        res
          .status(500)
          .send({ message: `${e.message} - falha ao cadastrar usuário.` });
      } else {
        res.status(201).send(user.toJSON());
      }
    });
  };

  static updateUser = (req, res) => {
    const id = req.params.id;
    users.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      (e) => {
        if (!e) {
          res.status(200).send({ message: "Usuário atualizado com sucesso!" });
        } else {
          res.status(400).send({
            message: `${e.message} - falha ao atualizar usuário ou usuário não encontrado`,
          });
        }
      }
    );
  };

  static deleteUser = (req, res) => {
    const id = req.params.id;
    users.findByIdAndDelete(id, (e) => {
      if (e) {
        res.status(404).send({
          message: `${e.message} - falha ao deletar usuário ou usuário não encontrado`,
        });
      } else {
        res.status(204);
      }
    });
  };
}
