const historyLists = document.querySelectorAll(".history-list")

export function loadHistoryList(user){
    const loyaltyCard = user.loyaltyCard

    historyLists.forEach(historyList => {
        historyList.querySelector("header").querySelector("span").textContent = `${loyaltyCard.totalCuts} cortes`
    })

    createListElements(user.appointmentHistory)
}

function createListElements(appointmentHistoryList) {
    const lists = document.querySelectorAll(".list")

    lists.forEach(list => {
        list.innerHTML = ""
        for (let item of appointmentHistoryList) {
            
            const newItem = document.createElement("li")
            const newDiv = document.createElement("div")
            const strongDate = document.createElement("strong")
            const spanTime = document.createElement("span")
            const sealCheck = document.createElement("img")
    
            newDiv.className = "text-column"
            strongDate.setAttribute("id", "date")
            spanTime.setAttribute("id", "time")
            sealCheck.className = "seal-check"
            sealCheck.setAttribute("src", "/src/assets/template/sealcheck.svg")
    
            strongDate.textContent = item.date
            spanTime.textContent = item.time
    
            newDiv.appendChild(strongDate)
            newDiv.appendChild(spanTime)
    
            newItem.appendChild(newDiv)
            newItem.appendChild(sealCheck)
    
            list.appendChild(newItem)
        }
    })  
}