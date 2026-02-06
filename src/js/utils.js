const MIN_USERNAME_LENGTH = 1;
const MAX_USERNAME_LENGTH = 39;

export function validateUsername(userName) {
    if (!userName || userName.length === 0) {
        return {
            valid: false,
            message: "Por favor, insira um nome de usuário."
        };
    }

    if (userName.length < MIN_USERNAME_LENGTH || userName.length > MAX_USERNAME_LENGTH) {
        return {
            valid: false,
            message: `Nome de usuário deve ter entre ${MIN_USERNAME_LENGTH} e ${MAX_USERNAME_LENGTH} caracteres.`
        };
    }

    return {
        valid: true,
        message: ""
    };
}

export function handleError(error, defaultMessage = "Erro ao buscar usuário.") {
    console.error("Erro:", error);
    return error.message || defaultMessage;
}
