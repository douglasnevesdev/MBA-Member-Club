const cutsLeftElements = document.querySelectorAll(".cuts-left")
const progressFillElements = document.querySelectorAll(".progress-fill")
const progressBarContainers = document.querySelectorAll(".progress-bar-container")

export function loadProgressBar(loyaltyCard) {

    cutsLeftElements.forEach(cutsLeft => {
        const topSpanElement = cutsLeft.querySelector("span")

        topSpanElement.innerHTML = loyaltyCard.cutsRemaining == 1 
                            ? `<strong>${loyaltyCard.cutsRemaining}</strong> corte restante` 
                            : `<strong>${loyaltyCard.cutsRemaining}</strong> cortes restantes.`
    })
     
    const cutsRemainingPercentage = (loyaltyCard.cutsNeeded - loyaltyCard.cutsRemaining) * 100 / loyaltyCard.cutsNeeded

    progressFillElements.forEach(progressFill => {
        progressFill.style.width = `${cutsRemainingPercentage}%`
    })

    progressBarContainers.forEach(progressBarContainer => {
        
        const sideSpanElement = progressBarContainer.querySelector("span")

        sideSpanElement.innerHTML = `${loyaltyCard.cutsRemaining} de ${loyaltyCard.cutsNeeded}`
    })       
}