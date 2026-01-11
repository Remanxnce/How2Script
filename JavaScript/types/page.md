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
const player = getPlayerInSafeZone();
const viewVector = player.getViewVector();
if (viewVector > 100) console.log("You sure can view a lot!");
```

Based off of that segment, you would assume that `getViewVector` returns a `number`, but in actuality it was coded to use a different type, known as a `Object`. As mentioned above, some functions, methods, and values may also have their own assigned type, and a `Object` is one of them. Some Objects may have more specified forms of data, called an **interface**. Interfaces aren't entirely what I mean to talk about here though, so they'll be visited later. Here's a breakdown of each common JS type:

## BigInt
`bigint`, or "Big Integer", refers to an integer that uses more then 64 bits of memory. These numbers are typically in the Quintillions and beyond, and are commonly typed as a number and an `n` following, like `1n`. They are strictly integers, and are used somewhat often in data storage to represent user IDs. They are not *unsigned*, meaning that they can also be in the negative Quintillions and beyond.

```js
const reallyLargeNumber = 123n;
const numberOfPoundsIWeigh = 123592235857657856723423234223345;
```

MDN has a great [Webpage](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) that talks further about these, if you're interested in learning more about them. 

## Boolean
`Boolean` refers to a simple `true` or `false` value. It's used most commonly for conditionals, and only takes one byte of memory.

```js
const isEnabled = true;
const ignoreBadPackets = false;
```

## Function
`Function` refers to a callable function. It doesn't have a common byte size, and is used to store callable parts of code. They can be used to store callbacks in small data structures, or to store full sequences of events.

```js
const player = getPlayerInSafeZone();
const callableFunction = player.getViewVector;
callableFunction();//returns whatever player.getViewVector would
```

Like with the `bigint` above, [MDN's Website](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) has a full webpage talking more about them. 

## Number
`number` refers to any rational or irrational number. It includes decimals, and is *unsigned*. I don't think I really need to say much more about numbers...

```js
const hoursWastedDoingThis = 300;
```

## Object
`object` refers to a **JS** object. Objects in JS are a distinct data structure that's very powerful. It can store multiple values within it, and has no limited size. They're best known for being able to store `[key]:value` data inside of themselves. Objects make up the bulk of most of the internet, actually, including in:
- Databases
- Payloads sent in HTTP requests
- Data Structures
- Sorting

And more yet! Objects can also be converted into `string` type for smaller storage with `JSON.stringify()`, and converted from that string back into `object` type with `JSON.parse()`. Objects are probably the strongest **JS** datatype overall.

```js
const spawnLocation = {x:0, y:0, z:0};
const translationKeys = {
    spawn:"The spawn of this world!",
    combat:"The zone for combat!",
    forge:"The mighty weapon forge."
};
```

It's worth noting that all objects' data is expected to be stored within `{}` brackets.

### Why Objects?

Objects, at a primitive level, store their data in a very convient-to-access manner. This is great, and makes for efficient data, because you're able to store objects *inside* objects, meaning that you can have nested and very complex data that's super easy to access and read. Take a look at the example below:

```js
const activeTeams = {
    red:{
        members:4,
        bestMember:"quenr",
        teamRankings:{
            quenr:1440,
            mali:992,
            rem:874,
            bray:223
        }
    },
    blue:{
        members:5,
        bestMember:"blue",
        teamRankings:{
            blue:1280,
            jar:920,
            vera:739,
            ended:504,
            tnz:133
        }
    }
};
```

While that data structure is large on it's own, it's very easy to access data from. To get blue team's best member, you would just reference it as:

```js
const bestMemberFromBlue = activeTeams.blue.bestMember;
```

Storing things in `object` type allows for them to be stored in this complex way. However, storing largers sets of data in objects is called **JSON**, or *Javascript Object Notation*, not Object Data or whatever else you were thinking. JSON isn't the most scalable data storage method, but it's the best that **JS** can offer.

## String

`string` refers to a string of text. As mentioned above in Objects, it can be used to store *Stringified Objects*, or objects converted to strings with `JSON.stringify`. Don't let Objects get over your head, though. Strings are also a very powerful data type, and is the only option for text displays.

```js
const greetingMessage = "Hello, reader";
```

note that all strings are enclosed in *quotation marks*, or one of the equivalent. All of the following work to make strings in modern **JS**:
- `
- "
- '

Each of them represent a slightly different form of String, though. Take a look at yet another [MDN Website](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) if you're interested in reading more about the Subtypes of Strings, and learning how they work for things like *Unicode* and emojis.

## Undefined

`undefined` represents... nothing. `undefined` is a reserved keyword in **JS** that represents a variable having no defined value, or an accessed value not existing.

```js
const uselessVariable;
console.log(uselessVariable == undefined);//true
```

# Overall

It's worth knowing all of the data types that any language has to offer, as every single one of them brings something unique to work with. Objects would be useless without strings, numbers, and boolean values, and all of those values would be annoying to use if they had to be manually entered everywhere.

Now that you understand the different types of values, let's learn how to [Operate](https://github.com/Remanxnce/How2Script/JavaScript/operators/page.md) on those different values.