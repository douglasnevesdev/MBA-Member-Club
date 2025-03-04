const profilePictures = document.querySelectorAll(".profile-picture")
const names = document.querySelectorAll(".name")
const clientsSince = document.querySelectorAll(".client-since")

export function loadProfile(user) {

    // Nome do cliente
    names.forEach (name => {
        name.textContent = user.name
    })

    // Data de criação do cliente
    clientsSince.forEach (clientSince => {
        clientSince.textContent = `Cliente desde ${user.clientSince}`
    })

    // Foto de perfil do cliente
    profilePictures.forEach (profilePicture => {
        profilePicture.setAttribute("src", `src/assets/profiles/${user.id}.webp`)
    })
}

