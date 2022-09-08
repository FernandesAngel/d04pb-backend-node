import { validateCpf } from '../utils/cpfValidator.js';
import validateAge from '../utils/dateValidator.js';

export default function validateUser(req, res, next) {
  const {email, password, cpf, birthDate} = req.body
  const regEmail =/\S+@\S+\.\S+/;
  const regDate =/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.]((19|20)\\d\\d)$/;
  if(email && !regEmail.test(email)){
    return res.status(400).send({message: "Invalid email."})
  }

  if(cpf && !validateCpf(cpf)){
    return res.status(400).send({message: "Invalid CPF."})
  }

  if(password && password.length < 6){
    return res.status(400).send({message: "The password need to be at least 6 digits."})
  }

  if(birthDate && !validateAge(birthDate) && !regDate.test(birthDate)){
    return res.status(400).send({message: "BirthDate needs to be valid and need to be over 18 years old."})
  }

  next()
}
