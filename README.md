# SOLVING TOY PROBLEMS

### Instructions

* Create a repository on your GitHub account.

* Write down the solution in a file

* Push the solution to the above repository once done.

* Submit the repository link for review.

* Ensure your repository has a well-written README, detailing the steps taken to break down the problem and come up with a solution (Read me Sample.)

## Challenge 1: No ifs no buts(Toy Problem)

### Problem
Write a function that accepts two numbers a and b and returns whether a is smaller than, bigger than, or equal to b, as a string.

**BDD (Behavior Driven Development)**

*Given:* a and b
*When:* The probability of number a is smaller than, bigger than, or equal to b
*Then:* Return whether a is smaller than, bigger than, or equal to b, as a string

**Example1:** 
*Given:* (5, 4) 
*Return:* "5 is greater than 4"

**Example2:**
*Given:* (-4, -7) 
*Return:* "-4 is greater than -7"

**Example3:**
*Given:* (2, 2)
*Return:* "2 is equal to 2"

**PseudoCode:**
* Use an array called comparison, which holds three different strings representing the comparison results
* Use the spaceship operator <=> to compare a and b
* It returns -1 if a is less than b, 0 if a is equal to b, and 1 if a is greater than 
* Adding 1 to this result allows indexing into the comparison array and obtain the correct comparison string

**Code**
The code is available in comparison.rb

## Challenge2: Ordered Count of Characters(Toy Problem)

### Problem
Count the number of occurrences of each character and return it as a (list of arrays) in order of appearance. For empty output return (an empty list).

**BDD (Behavior Driven Development)**

*Given:* abracadabra
*When:* The number of occurrences of each character
*Then:* return it as a (list of arrays) in order of appearance. For empty output return (an empty list)

**Example1:** 
*Given:* "abracadabra"
*Return:* [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

**Example2:**
*Given:* "Code Wars" 
*Return:* [['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]

**Example3:**
*Given:* "233312"
*Return:* [['2', 2], ['3', 3], ['1', 1 ]]

**PseudoCode:**
* Use a hash map (in Ruby) called count to store the count of occurrences for each character
* Then iterate through the string, and for each character, we check if it exists in the count object/hash map
* If it does, increment its count by 1; otherwise, set its count to 1
* Finally, convert the object/hash map into an array of arrays using Object.entries() in JavaScript or .to_a in Ruby.

**Code**
The code is available in count.rb