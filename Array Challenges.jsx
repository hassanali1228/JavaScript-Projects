//Given an array of ints length 3, return the sum of all the elements.

function start(){

	//test cases
	println(sumThree([1,2,3]));     //should print: 6
	println(sumThree([5,11,2]));    //should print: 18
	println(sumThree([7,0,0]));     //should print: 7
	println(sumThree([1,2,1]));     //should print: 4
	println(sumThree([1,1,1]));     //should print: 3
	println(sumThree([2,7,2]));     //should print: 11
}

function sumThree([a,b,c]){
    var arr = [a,b,c];
    var sum = 0;
        for (var i = 0; i < arr.length; i ++){
            sum += arr[i];
        }
    return sum;
}

//////////////////////////////////////////////////////////////////////////////////////////////

//Given an int array length 2, return true if it does not contain a 2 or 3.

function start(){

	//test cases
	println(noTwoThree([4,4]));   //should be true
	println(noTwoThree([2,2]));   //should be false
	println(noTwoThree([0,2]));   //should be false
	println(noTwoThree([3,0]));   //should be false
	println(noTwoThree([0,0]));   //should be true
}

//////////////////////////////////////////////////////////////////////////////////////////////

//define your noTwoThree function here!	

function noTwoThree([a,b]){
    var arr = [a,b];
    var check = 0;
    
    for (var i = 0; i < arr.length; i++){
        if (arr[i] == 2 || arr[i] == 3){
            return false;
        } else if (arr[i] != 2 || arr[i] != 3){
            check = 1;
        }
    }
    
    if (check == 1){
        return true; 
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////

//PlusTwo: Given 2 int arrays, each length 2, 
//return a new array length 4 containing all their elements.

function start(){

	//test cases
	println(plusTwo([1,2],[3,4]));     //should print: 1,2,3,4
	println(plusTwo([4,4],[2,2]));     //should print: 4,4,2,2
	println(plusTwo([9,2],[3,4]));     //should print: 9,2,3,4

}

//////////////////////////////////////////////////////////////////////////////////////////////

//define your plusTwo function here!	

function plusTwo([a,b],[c,d]){
    var arr = [a,b,c,d];
    return arr;
}

//////////////////////////////////////////////////////////////////////////////////////////////

//biggerOfTwo:  Start with 2 int arrays, x and y, each length 2. 
//Consider the sum of the values in each array. Return the array 
//which has the largest sum. In event of a tie, return a.

function start(){

	//test cases
	println(biggerOfTwo([1,2],[3,4]));     //should print: [3,4]
	println(biggerOfTwo([3,4],[1,2]));     //should print: [3,4]
	println(biggerOfTwo([1,1],[1,2]));     //should print: [1,2]
	println(biggerOfTwo([2,1],[1,1]));     //should print: [2,1]
	println(biggerOfTwo([2,2],[1,3]));     //should print: [2,2]
	println(biggerOfTwo([1,3],[2,2]));     //should print: [1,3]
	println(biggerOfTwo([6,7],[3,1]));     //should print: [6,7]
 
}


//define your biggerOfTwo function here!	

function biggerOfTwo([a,b],[c,d]){
    var q = [a,b];
    var w = [c,d];
    
    var x = a + b;
    var y = c + d;
    
    if (x > y || x == y){
        return q;
    } else if (y > x){
        return w;
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////

//makeLast:     Given an int array, return a new array with double the length
//where its last element is the same as the original array, and 
//all the other elements are 0. The original array will be 
//length 1 or more.



function start(){

    //test cases
    println(makeLast([4,5,6]));     //should print: 0,0,0,0,0,6
    println(makeLast([1,2]));       //should print: 0,0,0,2
    println(makeLast([3]));         //should print: 0,3
    println(makeLast([7,7,7]));     //should print: 0,0,0,0,0,7
    println(makeLast([1,2,3,0]));   //should print: 0,0,0,0,0,0,0,0
    println(makeLast([0]));         //should print: 0,0
}


//define your makeLast function here!

function makeLast(arr) {
    var result = [];
    var last = arr.pop();
    result.push(0);
    
    for (var i = 0; i < arr.length; i++){
        result.push(0);
    }
    
    for (var i = 0; i < arr.length; i++){
        result.push(0);
    }

    result.push(last);
    
    return result;
}