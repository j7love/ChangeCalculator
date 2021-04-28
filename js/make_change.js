window.onload = function() {
    // set up onclick for calculate button
    let calculateBtn = $("calculate-entry");
    calculateBtn.onclick = processEntry;
}

/**
 * Processes user input and checks if input is between 0 and 99
 * If valid, entry is passed onto makeChange. A .wav file will also be executed.
 * If invalid, an error message will appear.
 */
function processEntry() {
    // declare audio variable
    let audio = $("coinRattle");
    // obtain input
    let userEntry = $("cents").value;
    // validate input
    if(userEntry <= 99 && userEntry > 0) {
        userEntry.onclick = makeChange;
        makeChange(userEntry);
        audio.play(); // plays audio
    }
    else {
        alert("Please enter a valid number between 0-99!")
    }
}

/**
 * Calculates amount of coins from user input. 
 * Results are then sent to displayOutput.
 * @param {*} centsAmnt Amount of change the user submits.
 */
function makeChange(centsAmnt) {
    // get quarters
    let quartersResult = parseInt(centsAmnt / 25);
    // get dimes
    let dimesResult = parseInt(centsAmnt % 25 / 10);
    // get nickels
    let nickelsResult = parseInt(centsAmnt % 25 % 10 / 5);
    // get pennies
    let penniesResult = parseInt(centsAmnt % 25 % 10 % 5 / 1);

    displayOutput(quartersResult, dimesResult, nickelsResult, penniesResult);
}

/**
 * Displays output for each coin.
 * @param {*} quartersOutput Total amount of quarters 
 * @param {*} dimesOutput Total amount of dimes
 * @param {*} nickelsOutput Total amount of nickels
 * @param {*} penniesOutput Total amount of pennies
 */
function displayOutput(quartersOutput, dimesOutput, nickelsOutput, penniesOutput) {
    // display quarters output
    $('quarters').value = quartersOutput;
    // display dimes output
    $('dimes').value = dimesOutput;
    // display nickles output
    $('nickels').value = nickelsOutput;
    // display pennies output
    $('pennies').value = penniesOutput;  
}

var $ = function(id) {
    return document.getElementById(id);
};


