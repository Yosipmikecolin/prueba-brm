import jwt from "jsonwebtoken";

const JWT_SECRET = "Ik2JvZBtWhQWwRO";

export const generateToken = (rol) => {
  const token = jwt.sign({ rol }, JWT_SECRET, { expiresIn: "1h" });
  return token;
};

export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (error) {
    return null;
  }
};
