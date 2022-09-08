import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    id: {type: String},
    name: {
      type: String,
      required: [true, "Name required"]
    },
    cpf: {
      type: String,
      required: [true, "CPF required"]
    },
    birthDate: {
      type: String,
      required: [true, "BirthDate required"]
    },
    email: {
      type: String,
      required: [true, "Email required"]
    },
    password: {
      type: String,
      required: [true, "Senha obrigatória"]
    },
    address: {
      type: String,
      required: [true, "Address required"]
    },
    number: {
      type: String,
      required: [true, "Number required"]
    },
    complement: {
      type: String,
      required: [true, "Complement required"]
    },
    city: {
      type: String,
      required: [true, "City required"]
    },
    state: {
      type: String,
      required: [true, "State required"]
    },
    country: {
      type: String,
      required: [true, "Country required"]
    },
    zipCode: {
      type: String,
      required: [true, "zipCode required"]
    },
  }
);

const users = mongoose.model('users', userSchema)

export default users;
