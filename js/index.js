console.log("Завдання 1");

function logItems(array){
    console.log(array);
    for(let i = 0; i < array.length; i += 1){
        console.log(`${i + 1} - ${array[i]}`);

    }
}

console.log(logItems(["Mango", "Poly", "Ajax"]));


console.log("Завдання 2");
function calculateEngravingPrice(message, pricePerWord){
const messageLenght = message.split(" ").length
return `Ціна гравіювання складає : ${messageLenght * pricePerWord}$`
}
console.log(calculateEngravingPrice("random words in this log for homework", 100))

console.log("Завдання 3");
function findLongestWord(string){
    const stringArr = string.split(" ");
    let longestWord = stringArr[0];
    for(let i = 0; i < stringArr.length; i += 1){
        if(longestWord.length < stringArr[i].length){
            longestWord = stringArr[i]
        }
    }
    return longestWord
}
console.log(findLongestWord("random words in this log for homework"));



console.log("Завдання 4");

function formatString(string){
    if(string.length <= 40){
        return string
    }
    else{
        const sliceString = string.slice(0, 40) + "..."
        return sliceString
    }
}
console.log(formatString("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet id labore nisi magnam ipsam est exercitationem, assumenda excepturi"));
console.log(formatString("fdsujhifdshuiydfgsyubhifdsuyigfesifnqfdeshgdsfiugdhbsfiufgbsfduyisdgfbuyihjedsyfwseiufhbswuyeifbhgsduyfhdsbdfui"));
console.log(formatString("hello"));

console.log("Завдання 5");



function checkForSpam(message){
if(message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale")){
    return true
}
else{
    return false
}
}

console.log(checkForSpam("random message with spam"));
console.log(checkForSpam("random message with sale"));
console.log(checkForSpam("random clear message"));

console.log("Завдання 6");

let input;
const numbers = [];
let total = 0;

do {
input = (prompt("Введіть число"));
if(input === null){
    break;
}
if(isNaN(input)){
    alert("Було введено не число, спробуйте ще раз")
    continue;
}
const number = Number(input)
numbers.push(number)
} while(true)
 
if(numbers.length > 0){
    for(let i = 0; i < numbers.length; i += 1){
        total += numbers[i]
    }
}
    console.log(`загальна сума чисел дорівнює ${total}`);