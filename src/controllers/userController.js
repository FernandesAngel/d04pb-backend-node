import users from "../models/user.js";

export default class UserController {

  static getUserById = (req, res) => {
    let id = req.params.id;
    users.findById(id, (e, user) => {
      if (e) {
        res
          .status(404)
          .send({ message: `${e.message} - ID do livro não foi localizado` });
      } else {
        const {
          _id,
          name,
          cpf,
          birthDate,
          email,
          address,
          number,
          complement,
          city,
          state,
          country,
          zipCode,
        } = user;
        const result = {
          _id,
          cpf,
          name,
          birthDate,
          email,
          address,
          number,
          complement,
          city,
          state,
          country,
          zipCode,
        };
        res.status(200).send(result);
      }
    });
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
