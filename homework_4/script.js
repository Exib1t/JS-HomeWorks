const operator = getOperator();
const operands = getOperands();
const result = calculate(operands, operator);
showResult(operands, operator, result)

function getOperator() {
    let oper = prompt("Enter the operator:")
    while (isOperatorInvalid(oper)) {
        oper = prompt("You enter wrong operator, try again:")
    } return oper;
}

function isOperatorInvalid(operatorValue) {
    return operatorValue !== "+" && operatorValue !== "-" && operatorValue !== "*" && operatorValue !== "/";
}

function getOperands() {
    let operands = prompt('Enter operands: (example: 1,2,3,4)')
    while (isOperandsValid(operands)) {
        operands = prompt('Please enter something: ')
    } return operands;
}

function isOperandsValid(operandsValue) {
    return operandsValue === "" || operandsValue === null;
}

function calculate(operandsValue, operatorValue) {
    const operandsList = operandsValue.split(',') //------------------------------------------------------------
    switch (operatorValue) {
        case "+":
            let res = Number(operandsList[0])
            for(let i = 1; i<operandsList.length; i++) {
                res += Number(operandsList[i])
            } return res;
        case "-" :
            let sub = Number(operandsList[0])
            for(let i = 1; i<operandsList.length; i++) {
                sub -= Number(operandsList[i])
            } return sub;
        case '*' :
            let mult = Number(operandsList[0])
            for(let i = 1; i<operandsList.length; i++) {
                mult *= Number(operandsList[i])
            } return mult;
        case '/' :
            let div = Number(operandsList[0])
            for(let i = 1; i<operandsList.length; i++) {
                div /= Number(operandsList[i])
            } return div;
    }
}

function showResult(operandsValue, operator, result) {
    let operandsList = operandsValue.split(',') //---------------------------------------------------------------------------------
    let operandsString = operandsList.join(` ${operator} `)
    alert(`${operandsString} = ${result}`)
}
