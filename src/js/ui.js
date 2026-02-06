const elements = {
    inputSearch: document.getElementById("input-search"),
    btnSearch: document.getElementById("btn-search"),
    alert: document.querySelector(".alert"),
    profileResults: document.querySelector(".profile-results"),
    profileRepos: document.querySelector(".profile-repos")

};

export function getElements() {
    return elements;
}

export function clearAlert() {
    elements.alert.innerHTML = "";
}

export function showAlert(message, isError = true) {
    const alertClass = isError ? "alert-error" : "alert-success";
    elements.alert.innerHTML = `<p class="${alertClass}">${message}</p>`;
}

export function clearResults() {
    elements.profileResults.innerHTML = "";
}

export function clearRepos() {
    elements.profileRepos.innerHTML = "";
}

export function renderProfile(data) {
    const profileHTML = `
        <div class="profile-card">
            <img src="${data.avatar_url}" alt="Avatar de ${data.login}" class="avatar">
            <div class="profile-info">
                <h2>${data.name || "Sem nome"}</h2>
                <p>${data.bio || "Sem biografia disponível."}</p>
            </div>
        </div>

        <div class="profile-counters">
            <div class="followers">
                <h4>Seguidores</h4>
                <span>${data.followers}</span>
            </div>

            <div class="following">
                <h4>Seguindo</h4>
                <span>${data.following}</span>
            </div>
        </div>`;
    elements.profileResults.innerHTML = profileHTML;
}

export function renderRepos(userRepos) {
    const UserReposHTML = userRepos.length > 0 ? userRepos.map(repo => `
        <a href="${repo.html_url}" target="_blank">
            <div class="repo-card">
                <h3>${repo.name}</h3>
                <div class="repo-stats">
                    <span>⭐ Stars: ${repo.stargazers_count}</span>
                    <span>🍴 Forks: ${repo.forks_count}</span>
                    <span>👀 Watchers: ${repo.watchers_count}</span>
                    <span>💻 Language: ${repo.language || "N/A"}</span>
                </div>
                <p>${repo.description || "Sem descrição disponível."}</p>
            </div>
        </a>
        `).join('') : `<p>Sem repositórios disponíveis.</p>`;
    elements.profileRepos.innerHTML = UserReposHTML;
}

export function getSearchValue() {
    return elements.inputSearch.value.trim();
}

export function focusInput() {
    elements.inputSearch.focus();
}
