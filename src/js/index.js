import { getUserProfile } from "./api.js";
import { getElements, clearAlert, showAlert, clearResults, renderProfile, getSearchValue } from "./ui.js";
import { validateUsername, handleError } from "./utils.js";

const { btnSearch } = getElements();

async function handleSearch() {
    try {
        const userName = getSearchValue();

        // Validação do nome de usuário
        const validation = validateUsername(userName);
        if (!validation.valid) {
            showAlert(validation.message);
            clearResults();
            return;
        }

        // Limpar alertas anteriores e buscar o perfil
        clearAlert();
        const profileData = await getUserProfile(userName);

        // Renderizar o perfil encontrado
        renderProfile(profileData);

    } catch (error) {
        const errorMessage = handleError(error, "Usuário não encontrado.");
        showAlert(errorMessage);
        clearResults();
    }
}

// Event Listener
btnSearch.addEventListener('click', handleSearch);

// Permitir busca ao pressionar Enter
document.getElementById("input-search").addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
});
