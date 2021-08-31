const activityArea = document.querySelector(".activity-area")
const button = document.querySelector(".button")
const activityAddress = "https://apis.scrimba.com/bored/api/activity"



button.addEventListener("click", () => {
    fetch(activityAddress)
.then((response) => {
    return response.json()
})
.then((data) => {
    activityArea.innerHTML = `
        <p class="api-text">${data.activity}</p>
    `
})
})

