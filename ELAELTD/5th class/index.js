// Largest number
function largestNumber (num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }
    else if(num2 > num1 && num2 > num3){
        return num2;
    }
    else{
        return 3;
    }
}

const numbers = largestNumber(56, 26, 27);
console.log(numbers);

function checkEqual(a,b,c){
    return a == b || a == c || b == c;
}
const output = checkEqual(3,4,4);
console.log(output);

// 12 এর নামতা
function multiplication(){
    for(let i = 1; i <= 10; i++){
        console.log(12 * i);
    }
}
multiplication();

const name = 'kishor';
console.log(name.toUpperCase());

const name2 = 'KISHOR';
console.log(name.toLowerCase());


function gradePoint(mark){
    if(mark >= 80){
        return 'A';
    } else if (mark >= 60){
        return 'B';
    } else if (mark >= 50){
        return 'C';
    } else if(mark >= 40){
        return 'D';
    } else{
        return 'F';
    }
}

const motin = gradePoint(80);
console.log(motin);
const kader = gradePoint(66);
console.log(kader);
const jamal = gradePoint(40);
console.log(jamal);
const foridul = gradePoint(90);
console.log(foridul);



// Square
function square (num){
    const result = num * num;
    return result;
}
const getOutput = square(67);
console.log(getOutput);