import { useMemo } from "react";
import { authErrorMessages } from "../utils";

const defaultErrorMessage =
  "Ocurrió un error inesperado. Por favor, inténtalo de nuevo.";

export const useFirebaseErrorHandler = () => {
  const errorMessages = useMemo(() => authErrorMessages, []);

  const getErrorMessage = (errorCode) => {
    if (!errorCode) return;
    return errorMessages[errorCode]?.message || defaultErrorMessage;
  };

  return { getErrorMessage };
};
