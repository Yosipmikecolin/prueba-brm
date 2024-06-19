export const validationUser = (message) => {
  switch (message) {
    case "Validation error: Validation isIn on rol failed":
      return "El rol no es válido, debe ser (admin o client)";

    default:
      return message;
  }
};
