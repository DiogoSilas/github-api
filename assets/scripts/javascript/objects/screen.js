const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML =
        `<div class="info">
            <img src="${user.avatarUrl}" alt="Foto de Perfil do Usuário" />
            <div class="data">
                <h1>${user.name ?? 'Não possui nome.'}</h1>
                <p>${user.bio ?? 'Não possui bio.'}</p>
                <p><a href="${user.blog ?? '#'}" target="_self">Blog</a></p>
            </div>
        </div>`

        let repositoriesItems = '';
        user.repositories.forEach(repo => {
            repositoriesItems += 
            `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`
        });

        if(user.repositories.length > 0) {
            this.userProfile.innerHTML += 
            `<div class="repositories section">
                <h2>Repositótrios</h2>
                <ul>${repositoriesItems}</ul>
            
            </div>`
        };
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado.</h3>"
    }
};

export { 
    screen
}