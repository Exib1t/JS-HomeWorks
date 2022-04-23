class GameLogic {

  constructor(minePath, clearPath, coverPath, rowsAmount, element, button) {
    this.minePath = minePath;
    this.clearPath = clearPath;
    this.coverPath = coverPath;
    this.rowsAmount = rowsAmount;
    this.board = document.querySelector(element)
    this.resButton = document.querySelector(button)
  }

  createMine() {
    return `<img src=${this.minePath} type='mine'>`
  }

  createClear() {
    return `<img src=${this.clearPath} type='clear'>`
  }

  createCover() {
    return `<img src=${this.coverPath} type='cover'>`
  }

  createLoseText() {
    return '<p>You Lose! Try Again?</p>'
  }

  randomizeBoard() {
    this.board.innerHTML = ''
    this.resButton.setAttribute('disabled', 'disabled')

    for (let i = 0; i < this.rowsAmount; i++) {
      if (Math.random() < 0.5) {
        this.board.insertAdjacentHTML('beforeend', this.createMine())
        this.board.insertAdjacentHTML('beforeend', this.createClear())
      } else {
        this.board.insertAdjacentHTML('beforeend', this.createClear())
        this.board.insertAdjacentHTML('beforeend', this.createMine())
      }
    }

    let imagesArray = Array.prototype.slice.call(document.querySelectorAll('img[type]')).reverse()

    let num = 0.5;

    for (let img of imagesArray) {
      img.setAttribute('isClickable', false)

      img.setAttribute('number', Math.round(num))
      num += 0.5

      img.style.filter = 'blur(0px)'

      img.src = this.coverPath
    }
  }

  clickOnCell() {
    this.board.addEventListener('click', (event) => this.clickOnTarget(event))
  }

  clickOnTarget(event) {

    this.clickableRow()

    if (event.target.getAttribute('isClickable') === 'false') {
      return
    }

    event.target.setAttribute('isClickable', 'false')

    if (event.target.getAttribute('type') === 'mine') {
      event.target.src = this.minePath
      this.openAll()
      this.showLose()
      this.resButton.removeAttribute('disabled')
    } else if (event.target.getAttribute('type') === 'clear') {
      event.target.src = this.clearPath
      this.openPair(event)
    }
  }

  openPair(event) {
    let num = event.target.getAttribute('number')
    event.target.setAttribute('number', this.rowsAmount + 1)

    let imagesArray = Array.prototype.slice.call(document.querySelectorAll('img[type]')).reverse()

    for (let img of imagesArray) {
      if (img.getAttribute('number') === num) {
        if (img.getAttribute('type') === 'mine') {
          img.src = this.minePath
        } else if (img.getAttribute('type') === 'clear') {
          img.src = this.clearPath
        }
        img.setAttribute('number', this.rowsAmount + 1)
        img.setAttribute('isClickable', 'false')
      }
    }
  }

  openAll() {
    let imagesArray = Array.prototype.slice.call(document.querySelectorAll('img[type]')).reverse()

    for (let img of imagesArray) {
      if (img.getAttribute('type') === 'mine') {
        img.src = this.minePath
        img.style.filter = 'blur(5px)'
      } else if (img.getAttribute('type') === 'clear') {
        img.src = this.clearPath
        img.style.filter = 'blur(5px)'
      }
    }
  }

  clickableRow() {
    let imagesArray = Array.prototype.slice.call(document.querySelectorAll('img[type]')).reverse()

    let minNum = this.rowsAmount + 1;

    for (let img of imagesArray) {
      let number = img.getAttribute('number')
      if (Number(number) > minNum) {
        break;
      } else if (Number(number) <= minNum) {
        minNum = Number(number)
      }
    }

    for (let img of imagesArray) {
      let number = img.getAttribute('number')
      if (Number(number) === minNum) {
        img.setAttribute('isClickable', true)
      }
    }
  }

  showLose() {
    this.board.insertAdjacentHTML('beforeend', this.createLoseText())
  }

  clickOnrestartButton() {
    this.resButton.addEventListener('click', () => {
      this.randomizeBoard()
      this.clickOnCell()
    })
  }

  newGame() {
    this.randomizeBoard()
    this.clickOnCell()
    this.clickOnrestartButton()
  }

}

const minesweeper = new GameLogic('images/mine.png', 'images/clear.jpg', 'images/cover.jpg', 5, '#board', '#restartGameButton')
minesweeper.newGame()

