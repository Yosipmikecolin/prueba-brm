import User from "../models/user.module.js";
import { validationUser } from "../validations/index.js";

//OBTENER USUARIOS
export const getUser = async (_req, res) => {
  const users = await User.findAll();
  res.json(users);
};

//CREAR USUARIO
export const createUser = async (req, res) => {
  try {
    const { body } = req;

    const existingUser = await User.findOne({ where: { email: body.email } });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "El correo electrónico ya está registrado" });
    } else {
      const newUser = await User.create(body);
      res.status(201).json(newUser);
    }
  } catch (error) {
    console.log("Error en consola", error);
    const response = validationUser(error.message);
    res.status(500).json({ error: response });
  }
};
