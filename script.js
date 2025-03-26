const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')


let humanScoreNumber = 0
let machineScoreNumber = 0


const playHuman = (humanchoice) => {

  playTheGame(humanchoice, playComputer())
}

const playComputer = () => {
  const choices = ["pedra", "papel", "tesoura"]
  const randonNumber = Math.floor(Math.random() * 3)

  return choices[randonNumber]
}

const playTheGame = (human, computer) => {

  console.log("humano: " + human + "Máquina: " + computer)

 if (human === computer) {
        result.innerHTML = "Empate!"

 }else if (
  (human === "papel" && computer === "pedra") ||
  (human === "pedra" && computer === "tesoura") ||
  (human === "tesoura" && computer === "papel")
) {
  humanScoreNumber++
  humanScore.innerHTML = humanScoreNumber
      result.innerHTML = "Você ganhou!"

   
} else {
  machineScoreNumber++
  machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu!"
}

} 
