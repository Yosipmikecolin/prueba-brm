import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

// * GENERAR TOKEN CON ID DEL USUARIO
export const generateToken = (id) => {
  const token = jwt.sign({ id }, JWT_SECRET, { expiresIn: "5h" });
  return token;
};

// * VERIFICAR TOKEN ENVIADO DESDE EL CLIENTE
export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (error) {
    return null;
  }
};
