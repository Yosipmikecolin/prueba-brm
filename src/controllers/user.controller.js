import User from "../models/user.models.js";
import { validationUser } from "../validations/index.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../token/auth.js";

// *LOGIN USUARIO
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Contraseña incorrecta" });
    }

    const token = generateToken(user.rol);
    res.json({
      username: user.username,
      token,
    });
  } catch (error) {
    console.error("Error al autenticar usuario:", error);
    res
      .status(500)
      .json({ error: "Hubo un problema al intentar autenticar al usuario" });
  }
};

// *CREAR USUARIO
export const createUser = async (req, res) => {
  try {
    const { body } = req;

    const existingUser = await User.findOne({ where: { email: body.email } });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "El correo electrónico ya está registrado" });
    }

    // Encripta la contraseña antes de guardarla
    const hashedPassword = await bcrypt.hash(body.password, 10); // 10 es el número de rondas de encriptación

    // Crea un nuevo usuario con la contraseña encriptada
    const newUser = await User.create({
      ...body,
      password: hashedPassword, // Guarda la contraseña encriptada en la base de datos
    });

    // Genera un token JWT y envía username y token en la respuesta
    const token = generateToken(newUser.rol);
    res.status(201).json({
      username: newUser.username,
      token,
    });
  } catch (error) {
    console.error("Error al crear usuario:", error);
    const response = validationUser(error.message);
    res.status(500).json({ error: response });
  }
};
