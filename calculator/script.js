const result = document.querySelector(".result_span")

function buttonClicked(val) {
  result.textContent += val
}


function buttonEqualClicked() {
  let expression = result.textContent
  while (expression.includes(',')) {
    expression = expression.replace(',', '.')
    console.log(expression)
  }
  result.textContent = eval(expression)
}

function buttonClearClicked() {
  result.textContent = ''
}