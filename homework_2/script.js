const operation = prompt('Enter operation: ');
if (
    operation === '+' ||
    operation === '-' ||
    operation === '*' ||
    operation === '/'
) {
    const firstNumber = prompt('Enter first number: ');
    if (isNaN(firstNumber) === false) {
        const secondNumber = prompt('Enter second number: ');
        if (isNaN(secondNumber) === false) {
            switch (operation) {
                case '+':
                    alert(
                        `${firstNumber} ${operation} ${secondNumber} = ${Number(firstNumber) + Number(secondNumber)}`);
                    break;

                case '-':
                    alert(
                        `${firstNumber} ${operation} ${secondNumber} = ${Number(firstNumber) - Number(secondNumber)}`);
                    break;

                case '*':
                    alert(
                        `${firstNumber} ${operation} ${secondNumber} = ${Number(firstNumber) * Number(secondNumber)}`);
                    break;

                case '/':
                    alert(`${firstNumber} ${operation} ${secondNumber} = ${Number(firstNumber) / Number(secondNumber)}`);
                    break;
            }
        } else {
            alert('You enter not a number!');
        }
    } else {
        alert('You enter not a number!');
    }
} else {
    alert(`You enter wrong operation! (${operation})`);
}
