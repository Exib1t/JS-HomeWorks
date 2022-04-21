const board = document.querySelector('#board')

class Game{
  constructor(minePath, rowsAmount, clearPath, coverPath) {
    this.minePath = minePath;
    this.rowsAmount = rowsAmount;
    this.clearPath = clearPath;
    this.coverPath = coverPath;
  }

  get createMine() {
    return `<img src=${this.minePath}></img>`
  }

  get createClear() {
    return `<img src=${this.clearPath}></img>`
  }

  get createCover() {
    return `<img src=${this.coverPath}></img>`
  }

  get minesLoad() {
    for (let i = 0; i <= this.rowsAmount; i++) {
      if(Math.random() < 0.5) {
        board.insertAdjacentHTML('beforeend', this.createMine)
        board.insertAdjacentHTML('beforeend', this.createClear)
      } else {
        board.insertAdjacentHTML('beforeend', this.createClear)
        board.insertAdjacentHTML('beforeend', this.createMine)
      }
    }
  }

  get minesCoverSet() {
    let imagesArray = document.querySelectorAll('img')
    for(let img of imagesArray) {
      let imgSource = img.src;
      if (imgSource.includes('mine.png')) {
        img.setAttribute('type', 'mine')
        img.src = this.coverPath
      } else if (imgSource.includes('right.jpg')) {
        img.setAttribute('type', 'clear')
        img.src = this.coverPath
      } else {alert('Error')}
    }
  }

  get imageClick() {
    board.addEventListener('click', imageFlip)
    const minePath = this.minePath
    let clearPath = this.clearPath

    function imageFlip(event) {
      let target = event.target;
      if (target.getAttribute('type') === 'mine') {
        target.src = minePath
      } else if (target.getAttribute('type') === 'clear') {
        target.src = clearPath
      }
    }
  }
}

let gameLoaded = new Game('images/mine.png', 5, 'images/right.jpg', 'images/cover.jpg')
gameLoaded.minesLoad
gameLoaded.minesCoverSet
gameLoaded.imageClick