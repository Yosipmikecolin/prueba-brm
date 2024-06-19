import User from "../models/user.module.js";


//OBTENER USUARIOS
export const getUser = async (_req, res) => {
  const users = await User.findAll();
  res.json(users);
};


//CREAR USUARIO
export const createUser = async (req, res) => {
  try {
    const { body } = req;
    const user = new User(body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error);
  }
};
