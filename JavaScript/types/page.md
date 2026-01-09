# Types of Values
Values refer to the different things that I variable can represent. Going back to the example used in variables, think of **pi** representing the irrational number 3.14159 (and so on). The connotation that a word holds could be a value. The values that variables can be hold is what this page is going to cover.

## Javascript Types & `any` Type
Javascript types aren't that different from types in other languages, but can differ a little in how they're defined. For example, some lower-level languages have `int` and `float` types to represent integers and decimals respectively. In Javascript, these ideas are combined and formed into `number` type. The most common **JS** type is `any` type, or any value.

A seperate branch of JavaScript, known as *TypeScript*, is a type-strict version of JavaScript, meaning that the user of the language is required to assign a type value to every variable. 

Typing in **JS**, or the assignment of types to variables, is a very common practice done in most well-designed codebases. It's also important to understand what types look like in documentation, which this page will cover as well.

## The `typeof` Keyword
If you're looking to get the type of a variable, you can use the `typeof` keyword. `typeof` is a special operator that will return the type of a value in `string` type. It's most commonly used when something has a *union type*, or more then one specified type.

```js
const NumberOfParticipants = 131;
console.log(typeof NumberOfParticipants);//returns "number"
```

This keyword isn't a very prevalent word when writing code, but it still is a very powerful keyword. Below shows an example of how you may use this:

```js
//this assumes that both of the functions called are valid functions
let totalOfParticipants = getAmountOfParticipants();
if (typeof totalOfParticipants == "string") {
    totalOfParticipants = wordToNumber(totalOfParticipants);
};
```

## Why Do Types Matter?
Types are important because it not only makes your code easier to understand, but also makes it easier to handle errors by knowing what values are to be returned by functions in advance. When dealing with confusing functions and methods, it's nice to see what they'll return. Some functions, methods, and values may also have their own assigned type. Take a look at the code segment below:

```js
const player = getPlayer();
const viewVector = player.getViewVector();
if (viewVector > 100) console.log("You sure can view a lot!");
```

From reading that, you'd assume that getViewVector returns just a `number`, right? However, if there was typing done, you would 