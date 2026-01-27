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