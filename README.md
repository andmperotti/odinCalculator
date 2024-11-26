# My Awesome Project
Write a short sentence or two about this project and what it does. Be sure to include a link and a screenshot (we're front end devs so we can actually see our work!).

**Link to live demo:** https://leafy-mermaid-4d65d4.netlify.app/

![alt tag](https://i.ibb.co/XCXWNLz/Screenshot-2024-11-26-at-10-51-48-AM.png)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

Html and Css used basic elements and styles, the javascript is messy but I'm still learning. I wanted to get the project completed, not focus too much on all the best practices.

## Optimizations
*(optional)*

I used two delegations to propogate down and bubble up, the first was on the container of the buttons of the calculator instead of declaring a variable for each element and writing its own specific listener, which saves memory even though there are better ways to write it than how I did.

## Lessons Learned:

When you have a bug go through and check what specifically variables are referencing, because maybe you confused them for something else and the entire program is broken because one variable is not what you thought. I wasted numerous hours rewriting the logic of the parent event listeners only to find a value was not what I thought in a variable. I had a pretty good laugh.
Order of operations are not specific to a past experience, they can change depending on what is needed. What I mean by this is I once worked on an extendable calculator which required two operands and 1 operator to even return a result, however in this project I wanted to return values when an operator was pressed/clicked so I had to figure out a way to take the current running total and add in the input depending on the actions of the user on the calculator.
Commit more often than you think, you will mess up, and commits allow us to rewind. They also allow us to create detailed notes where we were at with each commit, which can eliminate alot of unnecessary pseudo code.
Found a bug while fixing a bug? Plan that for your next commit, don't fix both in the same commit or else you might have ten bug fixes in a single commit.



