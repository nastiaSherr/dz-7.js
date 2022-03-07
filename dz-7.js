

  // 4

let numbers = [2, 1, 4];
let numbers2 = [];
for (const i of numbers) {
     numbers2.push(i * 2)
}
 console.log(numbers2);


  // 1

let arrhive = [0, 1, false, 2, undefined, "", 3, null];
const result = [];

for (let value of arrhive) {
    if (typeof value === "number") {
        result.push(value)
    }
}
    console.log(result);


 // 2

let arr3 = [true, false, true, true, true, false];
 let truee = [];
 let falsee = [];

for (let i of arr3) {
    if (i === true) {
        truee.push(i);
    } else {
        falsee.push(i);
    }


    // 3 

    const arr4 = [1, 5, 2, 11, 17, 53];
    for (let i = 0; i < arr4.length; i += 1) {
        if (i % 2 === 0)
            continue; {
            console.log(i);
        }
    }

    // 5
    const num1 = Number(prompt("Введите первое число"));
    const operator = prompt("Введите оператор вычесления");
    const num2 = Number(prompt("Введите второе число"));
    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "/":
            result = num1 / num2;
            break;

        case "*":
            result = num1 * num2;
            break;
    }

    alert(`Результат вычисления: ${num1} ${operator} ${num2} = ${result}`);


    
    
    
}
