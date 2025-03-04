const id = document.querySelectorAll(".id-tag")
let slotsContainers = document.querySelectorAll(".slots")

export function loadLoyaltyCard(user) {

    id.forEach(id => {
        id.textContent = `ID: ${user.id}`
    })
    
    loadSlots(user.loyaltyCard)
}

function loadSlots(loyaltyCard) {
    slotsContainers.forEach(slotsContainer => {
        let allSlots = slotsContainer.querySelectorAll(".slot")

        allSlots.forEach(slot => {
        slot.classList.remove('slot-true');
        })

        if (allSlots.length < 10) {

            while (allSlots.length < 10) {
                const newSlot = document.createElement('div')

                newSlot.classList.add("slot")
                slotsContainer.insertBefore(newSlot, slotsContainer.firstChild)

                allSlots = slotsContainer.querySelectorAll(".slot")  
            }

        }

        if (loyaltyCard.cutsNeeded < 10) {

            for (let i = 0; i < 10 - loyaltyCard.cutsNeeded; i++) {
                slotsContainer.removeChild(slotsContainer.firstElementChild)
            }

            allSlots = slotsContainer.querySelectorAll(".slot")
        }

        for (let i = 0; i < loyaltyCard.totalCuts; i++) {

            if (i == 9) {

                allSlots[i].removeChild(allSlots[i].firstElementChild)
                const giftCheck = document.createElement("img")
                giftCheck.setAttribute("src", "/src/assets/template/gift-check.svg")
                allSlots[i].appendChild(giftCheck)

                allSlots[i].classList.remove("slot-gift")
                allSlots[i].classList.add("slot-gift-true")

                alert("Parabéns! Seu próximo corte é gratuito")
                break
            }

            allSlots[i].classList.add("slot-true")
        }
    })
    
}