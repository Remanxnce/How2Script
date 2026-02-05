# Operators
Operators are a part of the core principles of math. Each math operator does something different to the number. In coding, operators are almost the exact same, with some additional operators being added to use. This page will cover a lot of the operators that're used only in coding, as well as a couple rarely seen operators.

## Operators in JS
JavaScript operators are actually very nice, in the sense that they don't change a whole lot from operators used in coding in general. **JS**, to my knowledge, only has a couple exclusive operators.

There are three basic types of operators:
- Conditional
- Mutable
- Convenience

## Comparative Operators
Comparative Operators are used to check for conditional statements, and return a `true` or `false` (boolean) value, depending upon the result of the checked condition. They're used in tandem with `if` statements to create conditional code. Some of the most common are:

### == (Loose Equality)
Loose Equality checks if:
- Two values are equal
- Two values, as strings, are equal
- Two numbers are equal

Loose Equality checks are a common check, and are very similar to the other Equality Check, **Strict Equality**, but have a couple differences. They can be used on all data types, but like **Strict Equality** checks, may have some unexpected results with arrays and objects. Here's some examples of how it works, functionlly:

```js
    console.log("4" == 4)//true
    console.log("yes" == "no")//false
    console.log(37.3 == 37.3)//true
    console.log(["one","two"] == ["one","two"])//false, arrays require different checks
```

### === (Strict Equality)
Strict Equality checks only if:
- Two values are exactly equal

Strict equality checks are also a common check, but are a more concise check than **Loose Equality** checks. They can be used on all data types, but may have some unexpected results with Objects and Arrays.

```js
    console.log("4" == 4)//false
    console.log("yes"== "no")//false
    console.log(37.3 == 37.3)//true
```

Strict Equality checks are *generally* better practice then Loose Equality checks, but a vast majority of the time, the two function the same. 

### !== (Not Equal To)
Not equal to check if:
- Two values are not equal

Not equal to checks are also a common check, and unlike **Loose Equality**, does not have a strict version of itself. It can be used on all datatypes, but may have some unexpected results with Objects and Arrays.

```js
    console.log(3 !== 3)//false
    console.log(4 !== "four")//true
    console.log("apple" !== "banana")//true
```

### > (Greater then)
Greater then checks if:
- the left-side value is greater then the right-side value

Greater then is still a common check, but is used with only number-type values.
```js
    console.log(10 > 8)//true
    console.log(8 > 8)//false
    console.log(7.9 > 8)//false
```

### < (Less then)
Less then checks if:
- the left-side value is less then the right-side value

Less then is also a common check, and like greater then, is only used with number-type values.
```js
    //do I REALLY need to show examples?
```

### >= (Greater then or Equal to)
Greater then or Equal to checks if:
- The left-side value is equal to the right-side value
- The left-side value is greater then the right-side value

Greater then or Equal to is a comparatively less common check, but still is used often. 

### <= (Less then or Equal to)
Less then or Equal to checks if:
- The left-side value is equal to the right-side value
- The left-side value is less then the right-side value

It's a common check. I'm kinda just assuming that you understand how to use these checks, so I'm not providing repeat examples.


## Logical Operators
Logical Operators are used to check and combine logic, and are also used in tandem with `if` statements to create conditional code as well. They're less essential then **Comparative Operators**, but are still incredibly important.

W3Schools has a great link talking about these, if you don't find my explanations and examples to be good enough. it can be found [Here](https://www.w3schools.com/js/js_logical.asp).

### && (AND)
The && operator is used to combine multiple conditions together. Conditions are evaluated left-to-right, and the evaluations stop happening after the first check that returns false.

```js
    console.log(5 > 10 && complexArtithmeticEquation(145, 4592) == 234.295939393)//note that the second condition here isn't checked, and false is returned
    console.log("fruit" == "fruit" && "banana" == "banana")//true
    console.log("someValue" == "test" && "someValue")//false, even though the second part is true
```

### || (OR)
the || operator is used to check if a single condition within a series of conditions is true. Conditions are evaluated left-to-right, and the evaluations stop happening after the first check that returns true.

```js
    console.log(1 > 4 || 0 < 4)//true
    console.log(1 == 2 || 3)//this returns 3, because the || operator is used to refer to 3 if the conditon is evaluated as false
    console.log(1 == 2 || 2 == 3)//false
```

### ! (NOT)
The ! operator is used to reverse the logic of a boolean value. it swaps `true` to `false`, and vice verca. It can be used on any condition and datatype, but sometimes requires wrapping the condition in `()`.

```js
    console.log(!(1 == 2))//true
    console.log(!("apple"))//false
```

### ?? (Nullish Coalescing)
The ?? operator is used as a shorthand to check if a value is `undefined`, and assign it a default value if it is. It can be used to assign any value.

```js
    //without nullish coalescing
    let classroom = getClassroom();
    if (classroom == undefined){
        classroom = "Mrs. Parks"
    }
```

```js
    //with nullish coalescing
    const classroom = getClassroom() ?? "Mrs. Parks"
```

This operator is, for me personally, one of, if not the most common operator that I use behind equality. It doesn't hold a lot of value for smaller-scale projects, but for larger codebases, it's a major space and time saver, especially when used with `JSON.parse()` and `JSON.stringify()`.

### ? : (Ternary Operator(s))
The ? operator, known as a Ternary operator, is used to write a shorthand if-else statement. It will evaluate based on the value of the content before the operator, and returns either:
- The content after the `?` if the condition evaluates to true
- The content after the `:` if the condition evaluates to false

It's hard to call just the `?` the Ternary Operator, as the `:` goes hand-in-hand with it. It looks like this:
```js
    console.log(8 > 10 ? `8 Is greater than 10!` : `8 is less than 10`);//returns "8 is less than 10"
    const isImportant = true
    console.log(isImportant ? `THIS IS IMPORTANT!` : `this is not important`);//returns "THIS IS IMPORTANT!"
```

A lot of the value from this operator comes from using it for small conditional lines. You shouldn't use it in place of multi-line if statements, and should generally try to avoid stacking Ternaries. Do NOT do this:
```js
    const x = 5
    console.log(x > 3 ? (x > 4 ? (x > 5 ? "x is a large number" : "x is 4") : "x is 3") : "x is less than 3")
```
I'm sure just from reading that, you can get a pretty good idea of why it's not very good practice to stack ternaries.

### ?. (Optional Chaining)
The ?. operator is used with objects, class instances or potentially undefined values to avoid accessing methods or properties that do not exist upon it. Chances are, you won't use this operator a lot early on.

Picture an object with the following structure for the examples:
```js
    const winningRecords = {
        "2025":{
            winner:"rem",
            runnerUp:"padro"
        },
        "2024":{
            winner:{
                name:"orange",
                winGap:33,
                age:19
            },
            runnerUp:{
                name:"padro",
                age:22,
                pastPlacements:[ 2, 3, 9, 14 ]
            }
        }
    }
```
note that most commonly, you wouldn't see dictionary-type objects that have different formats within it, but for this example we'll have it.

```js
    console.log(winningRecords[2024].winner?.name)//orange
    console.log(winningRecords[2025].winner?.name)//undefined, throws no error
    console.log(winningRecords[2025].winner?.name ?? winningRecords[2025].winner)//rem
    console.log(winningRecords[2025].runnerUp.pastPlacements[1])//throws an error, pastPlacements is trying to be accessed when it doesn't exist
    console.log(winningRecords[2025].runnerUp.pastPlacements?.[1])//undefined, but throws no error this time, since it won't attempt to access indexes from an array that doesn't exist
```

Optional Chaining is best used as a safety net, to ensure that you don't get errors from accessing something that may not have a defined value.

## Arithmetic Operators
Arithmetic Operators are used to perfrom arithmetic operations on a number. They are almost exclusively used on number-type values, but have some implementation with other types.

### The `NaN` Keyword(s)

NaN, or *Not a Number*, is returned when a number-type value is attempted to be added to a non-number type before the number is converted to a string. It cannot be checked from Loose equality, and instead requires the `isNaN` function.

### +=, -=, *=, /= (Assignment Operators)
I'm covering all four of these at once because they're all very functionally similar. They, in short, assign the variable on the left-hand side the value of it after performing what's on the right-hand side of the operator.

```js
console.log(5 -= 10)//-5
let x = 5
x += 9
console.log(x)//14
```

### +, -, *, / (Regular Arithmetic Operators)
I'm covering all four of these at once because they're very basic concepts. If you don't know basic arithmetic, you *probably* shouldn't be reading this.

```js
console.log(5 - 10)//-5
let x = 5
x - 9
console.log(x)//5, as the value as was never saved.
```

```js
console.log("Hello" + " World")//Hello World
```

### % (Modulus)
Modulus operator returns the remainder of a given number when divided by another number. It's essentially long division from elementary school.

```js
console.log(9 % 4)//1
console.log(2 % 2)//0
console.log(3 % 11)//3
```

### ++ (Increment)
The Increment Operator automatically adds 1 to a number and assigns the value to the variable.

```js
let x = 3
x++
console.log(x)//4
```

### -- (Decrement)
The Decrement Operator automatically removes 1 to a number and assigns it to the value of the variable.
```js
let x = 4
x--
console.log(x)//3
```

## Takeaway
Almost every operator has a use in any codebase, and all can result in clean, strong code. It's best to spend some time learning these, if you can. Note that there is still some operators not listed here, like `<<` (Left Bitshift) and others that I haven't spoken about, as you won't commonly use them.

But, now that you know how operators work, especially Logical Operators, let's use them to make some [Conditionals!](https://github.com/Remanxnce/How2Script/blob/main/JavaScript/conditions/page.md)