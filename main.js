function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.round(Math.random() * (choices.length - 1))]
}

console.log(computerPlay())