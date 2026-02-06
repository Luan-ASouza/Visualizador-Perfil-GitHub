const BASE_URL = "https://api.github.com";

export async function getUserProfile(userName) {
    const response = await fetch(`${BASE_URL}/users/${userName}`);

    if (!response.ok) {
        throw new Error(`Usuário não encontrado: ${userName}`);
    }

    return await response.json();
}

export async function getUserRepos(userName) {
    const response = await fetch(`${BASE_URL}/users/${userName}/repos?per_page=10&sort=created`);

    if (!response.ok) {
        throw new Error(`Repositórios não encontrados para o usuário: ${userName}`);
    }

    return await response.json();
}