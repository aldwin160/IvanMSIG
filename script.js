const checkBtn = document.getElementById("check-btn")
const clearBtn = document.getElementById("clear-btn")
const userInput = document.getElementById("user-input")
const resultsDiv = document.getElementById("results-div")

checkBtn.addEventListener("click",
  () => {
    if (userInput.value===""){
      alert("Please provide a phone number")
    } else if (checkNumber(userInput.value)){
      resultsDiv.textContent = `Valid US number: ${userInput.value}`
    } else {
      resultsDiv.textContent = `Invalid US number: ${userInput.value}`
    }
  })

clearBtn.addEventListener("click",
  () => {
    resultsDiv.textContent = ""
    })

const checkNumber = (inputString) => {
  const regex = /^1?\s*(\(\d{3}\)|\d{3})(\s|-)?\d{3}(\s|-)?\d{4}$/
  return regex.test(inputString)
}
