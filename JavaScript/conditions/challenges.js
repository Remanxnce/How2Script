//Refactor these following conditionals to be as concise as possible.

let x = 9
let y = 5
if (x > 5 && x < 10){
    if (x > 2 || x < 8){
        if (y !== 5) {
            x = 4
        } else if (y === 5){
            y = 8
        }
    } else if (x === 9){
        x = 4
    }
}
console.log(x, y)//if done correctly, should be 4, 5

let studentCount = 41
let teacherCount = 1
if (studentCount > 35){
    if (studentCount < (35 * teacherCount)){
        if (teacherCount <= teacherCount) teacherCount++
    } else if (teacherCount > (studentCount / 35)){
        if (teacherCount > 1) teacherCount--
    }
}
console.log(teacherCount, studentCount)//if done correctly, should be 2, 41