import { validateCpf } from '../utils/cpfValidator.js';
import validateAge from '../utils/dateValidator.js';

export default function validateUser(req, res, next) {
  const {email, password, cpf, birthDate} = req.body
  const regEmail =/\S+@\S+\.\S+/;
  const regDate =/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.]((19|20)\\d\\d)$/;
  if(email && !regEmail.test(email)){
    return res.status(400).send({message: "Email inválido"})
  }

  if(cpf && !validateCpf(cpf)){
    return res.status(400).send({message: "CPF inválido"})
  }

  if(password && password.length < 6){
    return res.status(400).send({message: "A senha precisa ter no mínimo 6 dígitos"})
  }

  if(birthDate && !validateAge(birthDate) && !regDate.test(birthDate)){
    return res.status(400).send({message: "Data de nascimento precisa ser válida e maior que 18 anos."})
  }

  next()
}
