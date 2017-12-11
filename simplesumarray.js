/*

Given an array of N integers, can you find the sum of its elements?

Input Format

The first line contains an integer, N , denoting the size of the array. 
The second line contains N space-separated integers representing the array's elements.

Output Format

Print the sum of the array's elements as a single integer.

*/

// original solution

function simpleArraySum(n, ar) {
   var sum = ar.reduce(function(a, b) { return a + b; }, 0);
    console.log(sum);
}

// updated solution with es6 syntax

const simpleArraySum = (n, ar) => ar.reduce(function(a, b) { return a + b; }, 0);