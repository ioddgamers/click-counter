# click-counter

I wanted to to create a program that counts the number of times a button is clicks and updates the value to the interface. This helped me practice:
- Working with DOM
- Using functions
- Using event handlers

## Problem faced
A problem I faced is that the counter, when increased just after being decreased, decreased the value by 1 first, before then increasing it when the increase button is clicked again. This also happened vice-versa for the decrease button.

Update: Turns out the postfix increment and decrement operators (counterValue++/counterValue--) were updating my value affter it's used. Changing it to prefix operators solved it for me. --counterValue/++counterValue.

## Live Solution Page
https://ioddgamers.github.io/click-counter/
