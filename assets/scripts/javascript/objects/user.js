const user = {
    avatarURL: '',
    name: '',
    bio: '',
    blog: '',
    repositories: [],
    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.blog = gitHubUser.blog
        this.userName = gitHubUser.login
    },
    setRepositories(repositories) {
        this.repositories = repositories
    }
}

export {
    user
}