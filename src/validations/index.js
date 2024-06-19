export const validationErrors = (message) => {
  switch (message) {
    case "Validation error: Validation isIn on role failed":
      return "El rol no es válido, debe ser (admin o client)";

    default:
      return message;
  }
};
