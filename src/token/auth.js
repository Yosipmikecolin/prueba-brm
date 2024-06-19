import jwt from "jsonwebtoken";

const JWT_SECRET = "Ik2JvZBtWhQWwRO";

export const generateToken = (id) => {
  const token = jwt.sign({ id }, JWT_SECRET, { expiresIn: "5h" });
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
