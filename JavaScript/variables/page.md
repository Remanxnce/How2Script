# Understanding Variables
Variables in coding refer to a keyword, or set of keywords, that hold a given value. They're very similar in how we in the real world refer to variables in Math. Think of the Mathematical value __pi__, or the implied pause that comes from certain characters in english grammar, like that comma in this sentence. Creating variables is more or less defining and understanding those values.

## JavaScript Variables
In Javascript (**JS**), variables are defined with certain keywords. These keywords each have a different purpose and reasoning behind existing. There are three major variable types: `let`, `const`, and `var`. The rest of this page will be dedicated to breaking them down. 

variables are declared by declaring the *scope* of the variable, giving it a name, and optionally, assigning it a value. it looks like this:
```js
    const targetAge = 19;
```


### `let`
**Functionality:**
- [x] Declarable
- [x] Operatable
- [ ] Static
- [x] Modern

`let` variables are modern variables that can be changed at any point during code execution. They are **Declarable**, meaning that they can be created at any point in code. they are **Operatable**, meaning that they can be used for arithmetic and conditional expressions. They are __NOT__ **Static**, meaning that their value can be reassigned at any point during their lifetime. They're also **Modern**, and are one of the two varible types commonly used in modern JS runtimes.

```js
let greetingMessage = "Hello Reader!";
```

### `const`
**Functionality:**
- [x] Declarable
- [x] Operatable
- [x] Static
- [x] Modern

`const` variables, or constant variables, are very similar to `let` variables, but have one key difference: `const` variables __ARE__ **Static**. At no point after the initial assignment of a `const` can its value be changed. It is a **Modern** variable type, and is the second of the two variable types commonly used in modern **JS** runtimes.

Note also that in most IDEs (Interactive Development Environments), `const` variables will show up in a different color than `let` variables.

```js
const greetingMessage = "Hello Reader!";
```

### `var`

`var` variables, which is strange to say because `var` literally meant "variable", is a primitive version of variable declarations that has vastly different behaviors from `let` and `const`. Made originally for a browser **JS** engine, var has the same commonality as `let` in the sense that it isn't Static and is Declarable and Operatable, but has a lot of different properties due to not being modern at all. Some of these are:
- `var` has a global **scope**, or access range; `const` and `let` are block-scoped.
- `var` variables can be accessed before they're declared without throwing an error, but `let` and `const` cannot.

```js
var greetingMessage = "Hello Reader!";
```

### Examples of Each Variable Type
**Examples of `let`**

Below is an example of a variable being defined, then declared.
```js
let greetingMessage;//note that if no value is given, undefined is assumed.
greetingMessage = "Hello Reader!";
```

Below is an example of a variable being re-declared.
```js
let greetingMessage = "Hello Reader!";
greetingMessage = "Welcome, Reader!";
```
Below is an example showcasing operations being done with the variable and conditional re-declarations.
```js
let bonusPointsEarned = 1
if (bonusPointsEarned !== 0) bonusPointsEarned = 2
```
The following segments showcase how using this variable type can throw errors.
```js
numberOfReaders = 0 //This would throw an error from the variable being used before defined.
let numberOfReaders = 10
```

**Examples of `const`**

Though not listed above, it's worth mentioning that while you can declare a `const` variable with no defined value, it's pointless to do since you can't ever modify it to give it a value.

Below shows the declaration of a constant variable.
```js
const greetingMessage = "Hello Reader!";
```

The following segments showcase how using this variable type can throw errors.
```js
finalPrice = 0.01;//throws an error from being used before defined & assignment to constant value.
const finalPrice = 0.50;
```
```js
const numberOfCitizens = 292190
numberOfCitizens = numberOfCitizens + 150//throws an error from assignment to constant value.
```

**There will not be examples of `var` provided - use modern variables!**

The key takeaway from this is to know that `const` is used for static values, whereas `let` is used for dynamic values. For a vast majority of the variables that you declare in **JS**, it's best to use `const`. You'll see in other pages how the two different variable declarations can be meshed together to create fast, readable code.

Now that you understand the types of variables, let's move onto the [types of values](https://github.com/Remanxnce/How2Script/blob/main/JavaScript/types/page.md) that they can hold!