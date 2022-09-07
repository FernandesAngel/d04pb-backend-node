import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    id: {type: String},
    name: {
      type: String,
      required: [true, "Nome obrigatório"]
    },
    cpf: {
      type: String,
      required: [true, "CPF obrigatório"]
    },
    birthDate: {
      type: String,
      required: [true, "Data de nascimento obrigatória"]
    },
    email: {
      type: String,
      required: [true, "Email obrigatório"]
    },
    password: {
      type: String,
      required: [true, "Senha obrigatória"]
    },
    address: {
      type: String,
      required: [true, "Endereço obrigatório"]
    },
    number: {
      type: String,
      required: [true, "Número obrigatório"]
    },
    complement: {
      type: String,
      required: [true, "Complemento obrigatório"]
    },
    city: {
      type: String,
      required: [true, "Cidade obrigatória"]
    },
    state: {
      type: String,
      required: [true, "Estado obrigatório"]
    },
    country: {
      type: String,
      required: [true, "País obrigatório"]
    },
    zipCode: {
      type: String,
      required: [true, "CEP obrigatório"]
    },
  }
);

const users = mongoose.model('users', userSchema)

export default users;


// {
// 	"name": "Maria Silva",
// 	"cpf": "11111111111",
// 	"birthDate":  {% now 'iso-8601', '' %},
// 	"email": "maria@teste.com",
// 	"password": "123456",
// 	"address": "rua pedestre",
// 	"number": "12",
// 	"complemente": "casa",
// 	"city": "São Paulo",
// 	"state": "SP",
// 	"country": "Brasil",
// 	"zipCode": "88780-000"
// }
