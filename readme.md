
### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer: getElementById gets elements with specific id name.
        getElementsByClassName gets an array of element with specific class name.
        querySelector gets the first element it sees in that tagname or classname. 
        querySelectorAll gets an array of element from the html using tagname or classname. 

2. How do you **create and insert a new element into the DOM**?

Answer: to create element in the DOM a specific method is use known as document.createElement() and to insert new elements into the DOM appendChild() is used

3. What is **Event Bubbling** and how does it work?

Answer: Event Bubbling is a term when an event of an elements go upwards upto the root of tree where element parent is.

4. What is **Event Delegation** in JavaScript? Why is it useful?

Answer: An event delegation is a process where one eventListener handles multiple elements having same classname. It is useful because is takes less time to load if the same thing is done through loop the website will take alot of time to load.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

Answer: preventDefault() stop the default setting implemented to the DOM such as: a form automatically loads itself but preventDefault() stops this loading process
stopPropagation() stop propagating/climbing up or down the DOM tree