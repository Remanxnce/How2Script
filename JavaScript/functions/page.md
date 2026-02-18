# Understanding Functions
Take something complex in your day. Let's say, driving to work. There's a lot of things that have to happen before you drive and while you're driving. You have to get ready for work, start your car, navigate to work, stop at stop lights, pay attention to others. But, we simplify the entire process down to just "driving to work". Functions work in the same manner, where they take a very complex process and simplify it down into something easier to understand.

## Functions in JS
There's not really a whole lot that goes into functions in JavaScript that makes it all that different from functions in other languages. They're just used to run dedicated blocks of code quickly. They are, however, a very prominent part of any programming language.

### The `function` Keyword
Functions are declared using the keyword `function`, followed by the name of the function, a set of parenthases `()`, and then braces `{}` to open the logic of the function. Any code segment can be ran inside of the function, including the function itself!

```js
function printToConsole(){
    console.log("Hello World!")
}
```
Now, to actually use this function, we perform what is called a *Function Call*. It's the act of invoking a function to be ran.

```js
printToConsole()//Hello World!
```

I'm sure you're looking at this and thinking "wow rem, these are completely useless. It's just a fancy dress-up for my code" And right now, I would agree with you. Very rarely do you have functions that're presented in this form. *But*, I kinda lied to you. Functions have a lot more value then just what this shows.

### Parametered Functions
What if you want to give some values for a function to work with? Suppose that we wanted to give that `printToConsole` function a prefix to show before the "Hello World!" that it returns?  With function parameters, it's possible. Function parameters inherently have `any` type, so any value can be passed into a function. Function paremeters are declared inside of the parenthases, and if there is more then one argument passed to a function, it is serpated with a comma. Take a look at these functions below for a better understanding:

```js
function wrapContent(message){
    console.log("[" + message + "]")
}

function evaluate(numberOne, numberTwo){
    console.log(numberOne + numberTwo)
}
```

Now, we can write some real code! At this point, if you're following this with the intent of learning, I suggest that you take some time to try and write a couple functions of your own, to practice with the syntax and getting used to the style of functions that you like to write in.

It's worth mentioning that all parameters in functions will be of `let` type, meaning that you can override their values at any point during the code blocks' execution.

Another thing to note from parametered functions is **Optional Parameters**. Sometimes, we have parameters that we want to be optional for one reason like another. Maybe it's a function to calculate the price of a food order at a resturaunt, and you want to default `hasDrink` to `false`, in the event that the order doesn't have a drink. Assigning optional parameters is done in the same manner that variables are declared. Take a look:

```js
function priceOrder(mealNumber, includesDrink=true){
    const basePrice = listOfPrices[mealNumber] ?? 8.99
    const finalPrice = basePrice + (includesDrink ? 2.99 : 0)
}
```

### The `return` Keyword
Making these functions is great and all, but what if you want to actually get something back from the function? That `priceOrder` function seen above is kinda useless if you can't get the price back from the equation. The `return` keyword does just that: it allows you to return values from functions.

```js
function priceOrder(mealNumber, includesDrink=true){
    const basePrice = listOfPrices[mealNumber] ?? 8.99
    const finalPrice = basePrice + (includesDrink ? 2.99 : 0)
    return finalPrice
}
```

It's worth noting that `return` can also be used to return nothing to end function execution early. Take a look:

```js
function spawnParticles(player){
    if (player.isInSpawn) return
    player.spawnParticle("explosion",player.location)
}
```

In that example, `return` is used to make sure that any player passed into the function that is in spawn doesn't actually spawn a particle. Return is one of those very frequent keywords, and has a lot of usage all-around. 

# Good & Bad function Practices

Functions are generally best when:
- They have two or less parameters
- They have clear, concise names
- They aren't used to call a single method or do basic arithmetic
- They aren't used to do an insane amount of content.

It's important to make sure that your functions match all of those criteria, as you don't want to just write functions that do too much or do nothing at all. Take some functions below:

```js
function add(a, b){
    return a+b
}

function multiply(a, b){
    return a - b
}
```
Those functions match two of the four bad practices: They have a misleading name, and they're used to do somehting really basic that can be done inline. 