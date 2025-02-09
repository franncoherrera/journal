export const authErrorMessages = {
  "auth/claims-too-large": {
    message:
      "La carga útil de la reclamación que se entregó a setCustomUserClaims() supera el tamaño máximo de 1,000 bytes.",
  },
  "auth/email-already-in-use": {
    message:
      "Otro usuario ya está utilizando el correo electrónico proporcionado.",
  },
  "auth/id-token-expired": {
    message: "El token de ID de Firebase que se proporcionó está vencido.",
  },
  "auth/id-token-revoked": {
    message: "Se revocó el token de ID de Firebase.",
  },
  "auth/insufficient-permission": {
    message:
      "La credencial que se usó para inicializar el SDK de Admin no tiene permisos suficientes para acceder al recurso de Authentication solicitado.",
  },
  "auth/internal-error": {
    message:
      "El servidor de Authentication encontró un error inesperado cuando se intentaba procesar la solicitud.",
  },
  "auth/invalid-argument": {
    message:
      "Se proporcionó un argumento no válido al método de Authentication.",
  },
  "auth/invalid-claims": {
    message:
      "Los atributos personalizados del reclamo que se entregaron a setCustomUserClaims() no son válidos.",
  },
  "auth/invalid-continue-uri": {
    message: "La URL de continuación debe ser una string de URL válida.",
  },
  "auth/invalid-creation-time": {
    message:
      "La hora de creación debe ser una string de fecha en formato UTC válida.",
  },
  "auth/invalid-credential": {
    message:
      "Usuario o contraseña inválida. Inicie sesión nuevamente",
  },
  "auth/invalid-disabled-field": {
    message:
      "El valor que se proporcionó para la propiedad del usuario disabled no es válido.",
  },
  "auth/invalid-display-name": {
    message:
      "El valor que se proporcionó para la propiedad del usuario displayName no es válido.",
  },
  "auth/invalid-dynamic-link-domain": {
    message:
      "El dominio del vínculo dinámico proporcionado no se configuró o no se autorizó para el proyecto actual.",
  },
  "auth/invalid-email": {
    message:
      "Usuario o contraseña inválida.",
  },
  "auth/invalid-email-verified": {
    message:
      "El valor que se proporcionó para la propiedad del usuario emailVerified no es válido.",
  },
  "auth/invalid-hash-algorithm": {
    message:
      "El algoritmo de hash debe coincidir con las strings de la lista de algoritmos compatibles.",
  },
  "auth/invalid-password": {
    message:
      "El valor que se proporcionó para la propiedad del usuario password no es válido.",
  },
  "auth/too-many-requests": {
    message: "La cantidad de solicitudes supera el máximo permitido.",
  },
  "auth/user-not-found": {
    message:
      "No existe ningún registro de usuario que corresponda al identificador proporcionado.",
  },
};
