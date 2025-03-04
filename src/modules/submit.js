import { loadUser } from "./user/load-user.js";
import { getClientById } from "../services/api.js";


const containers = document.querySelectorAll(".hidden");
const button = document.querySelector("button");
const search = document.getElementById("search");

search.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '')
    let formattedValue = value.replace(/(\d{3})(?=\d)/g, '$1-')
    e.target.value = formattedValue
})

button.addEventListener("click", async function() {

    try {
        let user = await getClientById(search.value);
        loadUser(user);
        search.value = ""

        containers.forEach(visibility => {
            visibility.classList.remove("hidden")
        })

    } catch (error) {
        alert(error)
    }
})