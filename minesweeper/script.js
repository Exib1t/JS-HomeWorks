const board = document.querySelector('#board')

class SetMines{
  constructor(minePath, rowsAmount, clearPath) {
    this.minePath = minePath;
    this.rowsAmount = rowsAmount;
    this.clearPath = clearPath;
  }

  get minesLoad(){
    for (let i = 0; i <= this.rowsAmount; i++) {
      if(Math.random() < 0.5) {
        const mine = `<img src=${this.minePath}></img>`
        const clear = `<img src=${this.clearPath}></img>`
        board.insertAdjacentHTML('beforeend', mine)
        board.insertAdjacentHTML('beforeend', clear)
      } else {
        const mine = `<img src=${this.minePath}></img>`
        const clear = `<img src=${this.clearPath}></img>`
        board.insertAdjacentHTML('beforeend', clear)
        board.insertAdjacentHTML('beforeend', mine)
      }
    }
  }
}

let gameLoaded = new SetMines('images/mine.png', 5, 'images/right.jpg')
gameLoaded.minesLoad