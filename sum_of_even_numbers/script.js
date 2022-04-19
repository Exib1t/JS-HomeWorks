program()

function inputListOfNumbers() {
  const listLength = prompt('Enter the list length: ');
  let list = [];
  for (let i = 1; i <= listLength; i++) {
    list.push(Number(prompt(`Enter the number №${i}`)));
  }
  return list;
}

function figureOutEvenNumbers(listName) {
  const evenNumbers = listName.filter((val) => {
    if (val % 2 === 0) {
      return val;
    } else {return;}
  })
  return evenNumbers;
}

function sumEvenNumbers(listName) {
  const sum = listName.reduce((acc, val) => {
    acc += val;
    return acc;
  })
  return sum;
}

function program() {
  const listOfNum = inputListOfNumbers();
  const evenNumbers = figureOutEvenNumbers(listOfNum);
  const sumOfNumbers = sumEvenNumbers(evenNumbers);
  alert(sumOfNumbers);
}