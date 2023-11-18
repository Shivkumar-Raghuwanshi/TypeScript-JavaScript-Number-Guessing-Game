
function guessNumber() {
   // Taking inputs
   
   const prompt=require("prompt-sync")({sigint:true}); 
   const lowerLimit= parseInt(prompt("Please enter the lower limit: "));
   const upperLimit= parseInt(prompt("Please enter the upper limit: "));

   const randomNumber =  Math.floor(Math.random()*(upperLimit - lowerLimit + 1)) + lowerLimit;
   const numberOfChances = Math.round(Math.log2(upperLimit- lowerLimit + 1));
   console.log('You have only', numberOfChances, 'chances to guess the integer!')
    let count = 0;
while(count<numberOfChances){
    const guess= parseInt(prompt(`Please guess a number: `))
    count += 1;
    // Condition Checking
    if (randomNumber === guess) {
        console.log('Congratulations you did it in ', count, "attempt");
        break;
    } else if (randomNumber > guess) {
        console.log("Your guessed number is less than the target!");
    } else if (randomNumber < guess) {
        console.log("Your guessed number is greater than the target!");
    }
}

if (count >= numberOfChances) {
    console.log('The target number is :', randomNumber);
    console.log("Best of Luck for Next time!");
}

}
guessNumber();