# An Algorithm for Predicting Words

### The challenge: To write an algorithm that predics words and phrases based on the characters a user inputs. 

The algorithm should be able to take a string of character as an input and use it to predict the most likely words or phrases that the user is attempting to type. It should be able to handle variations in spelling, and capitalization and it should be able to suggest multiple options to the user if there are multiple possible matches.

## Solution 
Based on the above problem I tried to write an algorithm for predicting words while the user types on a search bar or text field.
### Language Used: Javascript
### Data Used: Found Here [List of Ethiopian Cities]( http://www.ethiovisit.com/ethiopia/ethiopia-regions-and-cities.html#googtrans(en|en) "Ethio Visit") through web scraping. 

I used different methods to solve the problem. Such as:
1. By Using Javascripts built in Starts With function: this built in function does the functionality requested on the challenge. This function check whether the given string starts with the character of specified string or not and it returns true if the string starts with the given prefix and false otherwise. 
But this function check the given search string with all the list of data ans it takes time to go through the lists and check if there are many data lists. 
2. Using Linked list method
: In this method the algorithm check if there are liked lists of the given string or character. the algorithm creates linked list of tree and it check if string has similar words in the list of linked words. Finds all words with the given prefix. This method has Time complexity of O(n), Space O(n), n is number of nodes involved (include prefix and branches). 
 
3. Using Hashmap Method 

## Implementation 
I used Javascript to solve the challenge and used HTML and CSS to showcase the results of the above algorithms. 

## Unit Testing
I used unit testing to test the algorithms. Based on the test cases the following results occurred: 





