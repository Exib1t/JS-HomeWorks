let operator = getOperator();
while (isOperatorValid(operator)) {
  alert('You write wrong operator');
  operator = getOperator();
}

let operandA = getOperand('A');
while (isNumber(operandA) === false) {
  alert('You write not a number');
  operandA = getOperand('A');
}

let operandB = getOperand('B');
while (isNumber(operandB) === false) {
  alert('You write not a number');
  operandB = getOperand('B');
}

const result = calculate(operandA, operandB, operator);

showResult();

//--------------------------------------------------------------//

function getOperator() {
  return prompt('Enter the operator:');
}

function getOperand(operandName) {
  return prompt(`Enter operand${operandName}:`);
}

function calculate(firstOperand, secondOperand, action) {
  switch (action) {
    case '+':
      return +firstOperand + +secondOperand;
    case '-':
      return +firstOperand - +secondOperand;
    case '*':
      return +firstOperand * +secondOperand;
    case '/':
      return +firstOperand / +secondOperand;
  }
}

function showResult() {
  alert(`${operandA} ${operator} ${operandB} = ${result}`);
}

function isOperatorValid(operation) {
  switch (operation) {
    case '+':
      return false;
    case '-':
      return false;
    case '*':
      return false;
    case '/':
      return false;
    default:
      return true;
  }
}

function isNumber(number) {
  if (number === null) {
    return false;
  } else {
      if (isNaN(number) ===  false) {
        return true;
      }
      else {
        return false;
    }
  }
}