/* 
This program chooses a number psuedorandomly, and keeps giving the user clues to help them guess 
the number for 6 turns, by telling them if their guess was lower or higher.
You also have the choice to play this game as many as you would like.
*/

function start(){
    var num = Randomizer.nextInt(1, 100); //Choosing the random number
    // println(num); //debugging aid
    var count = 0; //variable to keep track of how many tries it took you
    var lastGuess = 0; //varible intended to know what your last guess was
    
    while (true) {
        count ++;
        var guess = readInt("What number do you think the computer chose? ");
    
    
        if (guess != num){
            println("Sorry, please try again!");
            
            //The user's helping aid in guessing the number:
            if (guess < num && lastGuess == -1){
                println("Your guess was STILL too LOW!");
            } else if (guess < num){
                println("Your guess was too low!");
                lastGuess = -1;
            }
        
            if (guess > num && lastGuess == 1){
                println("Your guess was STILL too high!");
            } else if (guess > num) {
                println("Your guess was too high!");
                lastGuess = 1;
            }
            
        }
        
        //After 6 attempts, user is told that they have to play a new game
        if (count == 6  && guess != num){
            println("Too many attempts; please try again!");
            var again = readLine("Would you like to play again? ");
            if(again == "yes"){
                num = Randomizer.nextInt(1, 100);
                //println(num); //debugging aid
                count = 0;
                lastGuess = 0;
            } else if (again == "no"){
                break;
            } else { //if the user chooses an option that is not 'yes' or 'no'
                println("The only available options are 'yes' and 'no. ");
                again = readLine("Would you like to play again? ");
                
                if(again == "yes"){
                    num = Randomizer.nextInt(1, 100);
                    //println(num); //debugging aid
                    count = 0;
                    lastGuess = 0;
                } else if (again == "no"){
                    break;
                } else { //User's not smart enough
                    break;
                }
            }
        }
    
        //Once you have finally guessed the number, code asks for another game
        if (guess == num) {
            println("Congrats! Your guess was accurate.");
            println("This is how many tries it took you: " + count);
            again = readLine("Would you like to play again? ");
            
            if(again == "yes"){
                num = Randomizer.nextInt(1, 100);
                //println(num); //debugging aid
                count = 0;
                lastGuess = 0;
            } else if (again == "no"){
                break;
            } else { //if the user chooses an option that is not 'yes' or 'no'
                println("The only available options are 'yes' and 'no. ");
                again = readLine("Would you like to play again? ");
                
                if(again == "yes"){
                    num = Randomizer.nextInt(1, 100);
                    //println(num); //debugging aid
                    count = 0;
                    lastGuess = 0;
                } else if (again == "no"){
                    break;
                } else { //User's not smart enough
                    break;
                }    
            }
        }
    }
}