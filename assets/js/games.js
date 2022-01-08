var playerName = window.prompt("What is your robot's name?");
var playerHealth =100;
var playerAttack = 100;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
}

var promtFight = window.promtFight("would you like to FIGHT or Skip this battle? Enter 'FIGHT' or 'SKIP' to choose.");

// if a player choses to fight, then fight
if (promtFight === "fight" || promtFight === "FIGHT") {

// remove enemy's health by subtracting the amout set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
 console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + "health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    } else {
        window.alert (enemyName + " still has " + enemyHealth + " health left.");
    }

    // remove player's health by subtractinng the amout set inthe enemyAttack variable
playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }

    // if player choses to skip
} else if (promtFight === "skip" || promtFight === "SKIP") {
    // confirm player wants to skip 
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract  money from playerMoney for skipping
        playerMoney = playerMoney - 2;
    }
     // if no (false), ask question again by running fight() again
     else {
         fight();
     }
} 

    
