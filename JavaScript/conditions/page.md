# Conditions
Conditions are the backbone of logical decision-making and intelligent thought. Consider these: `if` given the choice between pizza and burgers, which one are you going to choose? Did you take hard classes, intermediate classes, or easy classes in school? Are you still in school, or are you graduated?

Each of those has their own decision-making value to you, and the same concept applies to conditionals in code. 

## Conditions in JS
Conditions in JS are similar to conditional expressions in almost every other language, but because of Javascript's high-level nature, there's a lot more freedom in *how* conditions are written. All conditions in javascript start with the keyword `if`, followed by a testable condition (something that returns or is a boolean value) wrapped in parenthases, and a segment of code to execute if the condition evaluates to true.

Coniditons can have multiple forms of executable code after the condition passes. Take the two following code segments:

```js
let x = 3;
if (x > 10) x = 5;
console.log(x)//3
```

```js
let x = 3;
if (x > 10) {
    x = 5;
}
console.log(x)//3
```

While doing the same thing functionally, they're structured somewhat differently. The first structure has the segment of code on the same line as the condition, whereas the second structure has the segment of code inside of braces (also referred to as squiggly brackets interchangably). For this case, the first structure is better, as it's expected to just do one thing.

But what if we have multiple things that we want to happen after the condition passes? then what?
Take the following code segment:

```js
let x = 1
let y = 3
if (x === 1 && y === 3) {
    x = 3
    y = 1
}
console.log(x, y)//3,1
```

If this was in the style of the first structure seen above, it would look gross. Not only that, it'd be harder to read. *When conditional code is doing more then one thing, it should always be in brackets.*

## Poorly Structured Conditions

```js
let x = 3
if (x > 0){
    if (x < 20){
        if (x > 2) {
            if (x < 4){
                console.log(x)//3
            }
        }
    }
}
```

Ew. The code segment above *works*, yes but it's not great by any means. Look at how far out it goes from tab indents! Not only that, it tests conditions that essentially test the same thing, and has *nested if statements*, or if-statements inside of if statements. Let's refactor it to be more readable and concise:

Start by Removing useless conditions that get re-tested multiple times.
```js
if (x > 2){
    if (x < 4){
        console.log(x)
    }
}
```

Then, combine conditions into a biconditional using the && operator showcased in [Operators](https://github.com/Remanxnce/How2Script/blob/main/JavaScript/operators/page.md).
```js
if (x > 2 && x < 4){
    console.log(x)
}
```

Finally, move the resulting code to happen on the same line as the conditon, as it's only one line of resulting code.
```js
if (x > 2 && x < 4) console.log(x)
```

It can be tedius sometimes to think about optimizing conditions, but look at how much easier that is to read! It doesn't seem like such a large change here, but if you have unoptimized conditions in a larger codebase that's shared with others, it can get really hard to maintain.

But, enough of basic `if` statements. What if you want something to happen if the `if` statement *doesn't* execute?

## The `else` Keyword

`else`, a keyword that goes in tandem with if-statements, can be used after a code block of an if-statement to execute a different segment of code. Take a look at how it's used:

```js
let x = 4
if (x > 4){
    x = 4
} else x++
console.log(x)//5
```

In that code segment, the first condition fails, so the subsequent `else` statement is ran instead. Note that like if-statements, you can have the subsequent code be inline or in block format.

This does NOT, however, mean that you should write conditions that are intended to fall to the else condition more. `else` should act as a fallback, and should be the less common condition of the two.

Another very important thing to note is that you can stack `if` statements on top of the `else` conditions, to create else-if statements, and make what's known as if-else-if structure. It looks like this:

```js
const grade = "A"
let approximatePercentage
if (grade === "A"){
    approximatePercentage = 100
} else if (grade === "B") {
    approximatePercentage = 92
} else if (grade === "C") {
    approximatePercentage = 85
} else if (grade === "D"){ 
    approximatePercentage = 72
} else approximatePercentage = 64
```

Each of those conditions will be checked, first-to-last, until a condition matches. This allows you to create a series of conditions for a single value, and create code that has a lot of logical thinking.

**Let's test your comprehension!** Inside of the current folder for this page exists a [Challenges](https://github.com/Remanxnce/How2Script/blob/main/JavaScript/conditions/challenges.js) file. It features several poorly optimized `if` statements, containing useless nested if statements. I challenge you to refactor them into more concise, more readable conditionals.

## Case Statements & The `switch` Keyword
As I demonstrated above with the if-else-if structure, you can add multiple conditons that're used to match to a single condition. And while it's nice to have that structure known, it falls apart when you have a much larger set of conditions to check. For cases like these, we use `case` statements. It's a more concise version of if-else-if statements that's used to keep things more organized, and unlike the structure seen above, will match to the corresponding condition instantly, saving time. Take a look at that approximate grade calculator in a case statement!

```js
const grade = "A"
let approximatePercentage
switch (grade){
    case "S":
    case "A":{
        approximatePercentage = 100
    }
    break
    case "B": {
        approximatePercentage = 92
    }
    break
    case "C":{
        approximatePercentage = 85
    }
    break
    case "D":{
        approximatePercentage = 72
    }
    default: {
        approximatePercentage = 64
    }
}
```

Note a couple different things going on with this `switch` statement:
- The `break` keyword
    - `break` is used to break out of a given case, and end the evalutation. Note the added `case "S"` at the top of the case statement. It makes `"A"` or `"S"` assign `93` to `approximatePercentage`. However, if there was a break under `case "S"`, passing S into the case statement would leave `approximatePercentage` as undefined.