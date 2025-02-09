export const formValidations = {
  email: [
    (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    "Por favor, ingresa un correo electrónico válido",
  ],
  password: [
    (value) =>
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        value
      ),
    "La contraseña debe tener al menos 8 caracteres, incluyendo una mayúscula, una minúscula, un número y un carácter especial (@, $, !, %, *, ?, &)",
  ],
  displayName: [
    (value) => /^[a-zA-Z\s]{3,50}$/.test(value),
    "El nombre debe tener entre 3 y 50 caracteres, y solo puede contener letras y espacios",
  ],
};
