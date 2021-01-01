/*
AMJAD Shopping List Management and Calculation | Hassan Ali Amjad | 2018 - 06 - 09

A program that is intended to help users keep track of how much money they are spending. A user is allowed 
to add items to a list, remove items from it, print the reciept with the total and tax, or just recieve
the taxed total.
*/ 

var nameAndPrice = [];

function start(){
    var name = [];
    
    var nameLength = readInt("How long would you like the software name to be? "); //Finds out how many numbers it needs to generate

    for (var i = 0; i < nameLength; i++){
        var temp = Randomizer.nextInt(1, 26); //Randomly picks a number between 1 and 26, each asssigned a different alphabet
        name.push(temp);
    }
    
    var name = nameGenerator(name); //Stores an alphabetical value of the nubers generated
    
    //Shows the inital menu before getting into the loop
    println('Welcome to ' + name + ' program so that YOU NEVER GET CHEATED ON AGAIN!');
    println("Menu: ");
    println("a) Add Items to List");
    println('b) Remove Items from List');
    println('c) Print Receipt');
    println('d) Get Total Price');
    println('e) Exit Program');
    
    while (true){ //The program runs in an endless loop, unless the user chooses to exit the program
        
        //Asks the user for input every iteration of the loop
        var input = readLine("Type in the command you would like to perform! For example, 'a' for Add Items to List. (Same Capital Case)");
        
        if(input == 'a' || input ==  "Add Items to List" || input == "a) Add Items to List"){
            addItems(nameAndPrice); //Passes the list to user's desired function
            
            arrReport(nameAndPrice); //Prints out array to give current status of their list
            
            //Prints the menu for user to choose from after this command has been completed
            println("Menu: ");
            println("a) Add Items to List");
            println('b) Remove Items from List');
            println('c) Print Receipt');
            println('d) Get Total Price');
            println('e) Exit Program');
        } else if (input == 'b' || input == "Remove Items from List" || input ==  'b) Remove Items from List'){
            removeItems(nameAndPrice); //Passes the list to user's desired function
            
            arrReport(nameAndPrice); //Prints out array to give current status of their list
            
            //Prints the menu for user to choose from after this command has been completed
            println("Menu: ");
            println("a) Add Items to List");
            println('b) Remove Items from List');
            println('c) Print Receipt');
            println('d) Get Total Price');
            println('e) Exit Program');
            
        } else if (input == 'c' || input ==  "Print Receipt" || input ==  'c) Print Receipt'){
            println(printReceipt(nameAndPrice)); //Passes the list to user's desired function 
            
            //Prints the menu for user to choose from after this command has been completed
            println("Menu: ");
            println("a) Add Items to List");
            println('b) Remove Items from List');
            println('c) Print Receipt');
            println('d) Get Total Price');
            println('e) Exit Program');
            
        } else if (input == 'd' || input ==  "Get Total Price" || input ==  'd) Get Total Price'){
            println('Total' + '$' + calculateTotal(nameAndPrice)); //Passes the list to user's desired function
            
            arrReport(nameAndPrice); //Prints out array to give current status of their list
            
            //Prints the menu for user to choose from after this command has been completed
            println("Menu: ");
            println("a) Add Items to List");
            println('b) Remove Items from List');
            println('c) Print Receipt');
            println('d) Get Total Price');
            println('e) Exit Program');
            
        } else if (input == 'e' || input ==  "Exit Program" || input ==  'e) Exit Program'){
            println('Thanks for giving our online shopping experience a try!');
            break; //Exits the while loop and the program
        }
    }
}

//Finds the alphabetical value of a bunch of random numbers generated
function nameGenerator(arr){
    var name = [];
    var x = ''; //variable initialized as string to store alphabets
    
    //Checks what alphabet is encoded for each number in the number's list
    for (var i = 0; i < arr.length; i++){
        if(arr[i] == 1){
            name.push('A');   
        }
        else if(arr[i] == 2){
            name.push('B');   
        }
        else if(arr[i] == 3){
            name.push('C');   
        }
        else if(arr[i] == 4){
            name.push('D');   
        }
        else if(arr[i] == 5){
            name.push('E');   
        }
        else if(arr[i] == 6){
            name.push('F');   
        }
        else if(arr[i] == 7){
            name.push('G');   
        }
        else if(arr[i] == 8){
            name.push('H');   
        }
        else if(arr[i] == 9){
            name.push('I');   
        }
        else if(arr[i] == 10){
            name.push('J');   
        }
        else if(arr[i] == 11){
            name.push('K');
        }
        else if(arr[i] == 12){
            name.push('L');   
        }
        else if(arr[i] == 13){
            name.push('M');   
        }
        else if(arr[i] == 14){
            name.push('N');   
        }
        else if(arr[i] == 15){
            name.push('O');   
        }
        else if(arr[i] == 16){
            name.push('P');   
        }
        else if(arr[i] == 17){
            name.push('Q');   
        }
        else if(arr[i] == 18){
            name.push('R');   
        }
        else if(arr[i] == 19){
            name.push('S');   
        }
        else if(arr[i] == 20){
            name.push('T');   
        }
        else if(arr[i] == 21){
            name.push('U');   
        }
        else if(arr[i] == 22){
            name.push('V');   
        }
        else if(arr[i] == 23){
            name.push('W');   
        }
        else if(arr[i] == 24){
            name.push('X');   
        }
        else if(arr[i] == 25){
            name.push('Y');   
        } 
        else if(arr[i] == 26){
            name.push('Z');   
        }
    }
    
    //Combines all the alphabets to make one single word
    for (var i = 0; i < name.length;i++){
        x += name[i];
    }
    return x;
}

//Prints out array to give current status of their list
function arrReport(arr){
    
    //Seperates the contents of the list into names and prices, and prints them out accordingly
    for(var i = 0; i < arr.length; i++){
        if (arr.indexOf(arr[i]) % 2 == 0){
            println(arr[i] + ": ");
        } else if (arr.indexOf(arr[i]) % 2 != 0){
            println('$' + arr[i]); 
        }
    }    
}

//Adds the name and price of an item to the user's list
function addItems(nameAndPrice){
    
    //Initial Run:
    var initial = readLine("What was your first item? ");
    nameAndPrice.push(initial);
    var initial1 = readFloat("How much did your first item cost? $");
    nameAndPrice.push(initial1);
    var moreItems = readBoolean("Did you purchase another item? Please reply with 'yes' or 'no'. "); 
    
    //If only one item was purchased, print a special line
    if (moreItems == false && nameAndPrice.length == 2){
        println('Have fun with the one item you purchased!');
    }
    
    //Keeps running in a loop until user doesn't have any more items to add
    while (moreItems == true){
        var next = readLine("What was this item's name? ");
        nameAndPrice.push(next);
        var next1 = readFloat("How much did this item cost? $");
        nameAndPrice.push(next1);
        moreItems = readBoolean("Did you purchase another item? Please reply with 'yes' or 'no'. ");
    }
    
    //Outputs different commands depending on how many items the user purchased
    if (moreItems == false && nameAndPrice.length <= 16 && nameAndPrice.length > 2){  //Less than 8 & More than 2
        println('Well, that was a short one, you are welcome back anytime!');
    } else if (moreItems == 'no' && nameAndPrice.length > 16){  //More than 8
        println('Well, that was a long one, you are welcome back anytime you would like!');
    }
    
}

// A function designed to find the item that user wants to get rid of, and removes it from the list
function removeItems(nameAndPrice){
    
    //Command won't work if no items are in list
    if (nameAndPrice.length == 0){
        println("Invalid Command");
    } else {
        while (true){ //Creates a loop until the user does not want to remove any more items
            var removeItems = readLine("Which item would you like to remove? (Please, use same Capital Case as original item)");
            var index = nameAndPrice.indexOf(removeItems); // Finds the item to remove in the list
            
            //If the desired item cannot be found:
            if(nameAndPrice[index] != removeItems){ 
                println("Item Not Found!");
            } else { //Removes the item's name and price from the list
                nameAndPrice.remove(index);
                nameAndPrice.remove(index);
            }
            
            //Exits function if user doesn't want to remove another item, otherwise asks for the other item
            var check = readBoolean("Would you like to remove another item?");
            if (check == false){
                break;
            }
        }
    }
}

//Prints a receipt which has the subtotal, tax, and total price
function printReceipt(arr){
    
    //Command won't work if no items are in list
    if (nameAndPrice.length == 0){
        println("Invalid Command");
    } else {
        var print = readBoolean("Would you still like to waste precious materials?"); //Rechecks if they want to proceed
        
        //Assorts the list into names and prices, then prints them out accordingly
        if(print == true){
            for(var i = 0; i < arr.length; i++){
                if (arr.indexOf(arr[i]) % 2 == 0){
                    println(arr[i] + ": ");
                } else if (arr.indexOf(arr[i]) % 2 != 0){
                    println('$' + arr[i]); 
                }
            }
            
            var total = calculateTotal(arr); //Passes the list to a new function intended to find the list
            println("Subtotal: " + total/1.1); //Removes tax from total price
            println("Tax: $" + (total - (total/1.1))) //Removes subtotal price from total to get tax
            return 'Total: ' + '$' + total; //Gives the total price including total and tax
            println('Thanks for giving our online shopping experience a try!');
        
        // If they do not proceed with printing, they are given an option to view the total only
        } else {
            var total = readBoolean("Would you just like to view the program total?");  
            if(total == true){
                return 'Total' + '$' + calculateTotal(arr);
                println('Thanks for giving our online shopping experience a try!');
            
            //If they don't want to view the total, they can provide feedback!
            } else if (total == false){
                println('Thanks for giving our online shopping experience a try!');
                var discard = readLine('Please provide us with any valuable feedback, so that we can further enhance our services! ');
            }
        }
    }
}

//Returns the total price of the items in the list including the tax
function calculateTotal(arr){
    
    //Command won't work if no items are in list
    if (nameAndPrice.length == 0){
        println("Invalid Command");
    } else {
        var taxed = [];
        var final = 0;
        
        for (var i = 0; i < arr.length; i++){
            if (arr.indexOf(arr[i]) % 2 == 0){
                //Excludes product names from final price
            } else if (arr.indexOf(arr[i]) % 2 != 0){
                var temp = arr[i]*1.1; //Finds the taxed price of the item and stores it in a temporary variable
                taxed.push(temp); //Stores that in a new array consisting of taxed prices
            }   
        }
        
        for (var i = 0; i < taxed.length; i++){
            final += taxed[i]; //Adds every taxed price to a single integer (final price)
        }
        
        //Applies any available discount to the final price
        var discount = readInt('How much discount did you recieve on your final purchase? If none, enter zero. %')
        final *= ((100 - discount)*0.01);
    
        return final;
    }
}

/*
© Hassan Ali Amjad 
*/
