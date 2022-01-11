/* GAME FUNCTIONS */

// function to generate a random numeric value 
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

// fight funtion (now with parameter for enemy's object holding name, health, and attack values)
var fight = function(enemyName) {
    while (playerInfo.health > 0 && enemyHealth > 0) {
//ask player if they'd like to fight or run 
    var promptFight = window.prompt('would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    
// if player picks "skip" confirm and then stop the loop
 if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip 
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

// if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
        // subtract  money from playerMoney for skipping
        playerInfo.money = Math.max(0, playerMoney - 10);
        console.log("playerMoney", playerMoney);
        break;
     }
    }

// generate random damage value based on player's attck power
var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    enemyHealth = Math.max(0, enemyHealth - playerInfo.attack); 
 console.log(
    playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + "health remaining."
    );

 // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");

        //award player money for winning
        playerInfo.money = playerInfo.money + 20;

        // leave while() loop since enemy is dead 
        break;
    } else {
        window.alert (enemyName + " still has " + enemyHealth + ' health left.');
    }

// remove player's health by subtractinng the amout set inthe enemyAttack variable
var damage = randomNumber(enemy.attack - 3, enemy.attack);

    playerInfo.health = Math.max(0, playerInfo.health - enemyAttack);

    console.log (
    enemyName + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
    );

// check player's health
    if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + " has died!");
        //leave while() loop if player is dead 
        break;
    } else {
      window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
    }
  }
};

    // function to start a new game
    var startGame = function() {
        // reset player stats
       playerInfo.reset();

     // fight each enemy robot by looping over them and fighting them one at a time
    for (var i = 0; i  < enemyInfo.lenght; i++) {
    // if player is still alive, keep fighting 
        if (playerInfo.health > 0) {
    // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it 
            window.alert('welcome to Robot Gladiators! Round ' + (i + 1));
            
     // pick new enemy to fight based on the index of the enemyNames array  
            var pickedEnemyObj = enemyInfo[i];

     // set health for picked enemy
            pickedEnemyObj.health = randomNumber(40, 60);

     // pass the pickedEnemyName variable's value into the fight function, where it will asume the value of the enemyName parameter
            fight(pickedEnemyName);

     // if player is still alive and we're not at the last enemy in the array 
            if (playerInfo.health > 0 && i < enemyNames.lenght - 1) {
                // ask if player wants to use the store before next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

     // if yes, take them to the store() function
                if (storeConfirm) {
                shop();
                }
            }
        }
    // if player is not alive, break out of the loop and let endGame function run 
        else {
            window.alert('You have lost your robot in battle! Game Over!');
        break;
        }
    }
    
    // after loop ends, we are either out of playerHealth or enimies to fight, so run the endGame function
    endGame();
  };

     // function to end the entire game
    function endGame() {
    window.alert("The game has now ended. Let's see how you did!");

    // if player is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! you now have a score of " + playerInfo.money + '.');
    } else {
        window.alert("you've lost your robot in battle!");
    }

    // ask player if they'd like to play again 
    var playAgainConfirm = window.confirm('would you like to play?');

    if (playAgainConfirm) {
        // start the game when the page loads
        startGame();
    } else {
        window.alert('Thank you for playing Robot Gladiators! come back soon!');
    }
};

// go to shop between battles function
var shop = function() {
    // ask player what they'd like to do 
    var shopOptionPrompt = window.prompt(
        'would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? please enter one "REFILL", "UPGRADE" or "LEAVE" to make a choice.'
        );

    // use switch case to carry out action
    switch (shopOptionPrompt) {
        case 'REFILL':
        case 'refill':
            playerInfo.refillHealth();
            break;
             case 'UPGRADE':
                 case 'upgrade':
                     playerInfo.upgradeAttack();
                     break;
                     case 'LEAVE':
                     case 'leave':
                         window.alert('leaving the store.');

                     // do nothing, so function will end 
                     break;
                     default:
                         window.alert('You did not pick a valid option. Try again.');

                         // call shop() again to force player to pick a valid option
                         shop();
                         break;
        }
    };

    // END GAME FUNCTIONS */

    /* GAME INFORMATION / VARIALBLES */

    // player information
    var playerInfo = {
        name: window.prompt("what is your robot's name?"),
        health: 100,
        attack: 10,
        money: 10,
        reset: function() {
            this.health = 100;
            this.money = 10;
            this.attck = 10;            
        },
        refillHealth: function() {
            if (this.money >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");
                this.health += 20;
                this.money -= 7;
            }
            else {
                window.alert("You dont have enough money!");
            }
        },
        upgradeAttack: function() {
            if (this.moey >= 7) {
                window.alert("Upgrading player's attck by 6 for 7 dollars.");
                this.attck += 6;
                this.money -= 7;
            }
            else {
                window.alert("You dont have enpugh money!");
            }
        }
    };

    // enemy information
    var enemyInfo = [
        {
            name: 'Roborto',
            attck: randomNumber(10, 14)
        },
        {
            name: 'Amy Android' ,
            attck: randomNumber(10, 14)
        },
        {
            name: 'Robo Trumble',
            attck: randomNumber(10, 14)
        }
    ];

    console.log(enemyInfo);
    console.log(enemyInfo[0]);
    console.log(enemyInfo[0].name);
    console.log(enemyInfo[0]['attack']);

    /* END GAME INFORMATION / VARIABLES */

    /* RUN GAME */
    startGame();

    
