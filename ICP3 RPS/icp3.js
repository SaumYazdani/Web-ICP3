/*Each function is based off the user's button press (the corresponding function is chosen). The logic is generally the same.
the user's input will be compared to the computers randomly generated choice, and the rules of rock, paper, scissors are applied.
each if statement displays who won and what each player chose. The script also automatically rloads the page after each turn,
so you can keep playing without refreshing each time.
 */
function rock(computerchoice){
    userinput = "rock"
    if (computerchoice == userinput){
        window.alert(`Its a Draw!\n You chose ${userinput} Computer chose ${computerchoice}`);
        window.location.reload();
    }
    if (computerchoice == "scissors"){
        window.alert(`You Won!\n You chose ${userinput} Computer chose ${computerchoice}`);
        window.location.reload();
    }
    if(computerchoice == "paper"){
        window.alert(`You Lost!\n You chose ${userinput} Computer chose ${computerchoice}`);
        window.location.reload();
    }

}
function paper(computerchoice){
    userinput = "paper"
    if (computerchoice == userinput){
        window.alert(`Its a Draw!\nYou chose ${userinput} Computer chose ${computerchoice}`);
        window.location.reload();
    }
    if (computerchoice == "scissors"){
        window.alert(`You Lost!\nYou chose ${userinput} Computer chose ${computerchoice}`);
        window.location.reload();
    }
    if(computerchoice == "rock"){
        window.alert(`You Won!\nYou chose ${userinput} Computer chose ${computerchoice}`);
        window.location.reload();
    }

}
function scissors(computerchoice){
    userinput = "scissors"
    if (computerchoice == userinput){
        window.alert(`Its a Draw!\nYou chose ${userinput} Computer chose ${computerchoice}`);
        window.location.reload();
    }
    if (computerchoice == "paper"){
        window.alert(`You Won!\nYou chose ${userinput} Computer chose ${computerchoice}`);
        window.location.reload();
    }
    if(computerchoice == "rock"){
        window.alert(`You Lost!\nYou chose ${userinput} Computer chose ${computerchoice}`);
        window.location.reload();
    }

}
//determing computer roll based off a random number 0-2
var computerroll = Math.floor (Math.random() * 3);
if (computerroll == 0){
    computerchoice = "rock";
}
if (computerroll == 1){
    computerchoice = "paper";
}
if (computerroll == 2){
    computerchoice = "scissors";
}
//setting user input null - initializing variable
var userinput = "null";






