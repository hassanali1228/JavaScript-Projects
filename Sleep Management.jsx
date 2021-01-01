/*
This program was created with the intention of finding how much you sleep in a week,
and then comparing it to your desired amount of your sleep.
*/

function start(){
    var totalHours = getTotalSleepHours();
    
    //Gets daily desired sleep value
    var idealSleep = readInt("How many hours would you like to sleep on average per night? ");
    var weeklyIdealSleep = getIdealWeeklySleep(idealSleep);
    
    var compare = calculateSleepResults(totalHours, weeklyIdealSleep);
    
    //Prints all outputs (Desired Sleep, Real Sleep, and if you sleep too much, too little or perfect.)
    println ("You would like to sleep: " + weeklyIdealSleep + " hours");
    println ("The total number of hours slept this week: " + totalHours + " hours");
    println (compare);
}

//Adds up all sleep you got on the differrent week days
function getTotalSleepHours(){
    var Monday = getSleepHours("Monday");
    var Tuesday = getSleepHours("Tuesday");
    var Wednesday = getSleepHours("Wednesday");
    var Thursday = getSleepHours("Thursday");
    var Friday = getSleepHours("Friday");
    var Saturday = getSleepHours("Saturday");
    var Sunday = getSleepHours("Sunday");
    
    var totalHours = Monday + Tuesday + Wednesday + Thursday + Friday + Saturday + Sunday;
    return totalHours;
}

//A template for asking user how much sleep user gets on each day
function getSleepHours(day){
    var ask = readInt("How many hours did you sleep on " + day + "? " );
    return ask;
}

//Multiplies desired sleep by seven to finds Weekly Desired Sleep
function getIdealWeeklySleep(daily){
    var total = daily*7;
    return (total);
}

//Compares Weekly Desired Sleep with Real Weekly Sleep, and gives feedback
function calculateSleepResults(real, ideal){
    if (real == ideal){
        return "Your sleep patterns are perfect!";
    } else if (real > ideal){
        return "You're getting more sleep than your target!";
    } else if (real < ideal){
        return "You aren't sleeping enough! Go to bed earlier!";
    }
}