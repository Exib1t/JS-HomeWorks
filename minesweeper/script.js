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
    for (let i = 1; i <= this.rowsAmount; i++) {
      if(Math.random() < 0.5) {
        board.insertAdjacentHTML('beforeend', this.createMine)
        board.insertAdjacentHTML('beforeend', this.createClear)
      } else {
        board.insertAdjacentHTML('beforeend', this.createClear)
        board.insertAdjacentHTML('beforeend', this.createMine)
      }
    }
  }

  get minesNumbered() {
    let imagesArray = document.querySelectorAll('img')
  }

  get minesCoverSet() {
    let imagesList = document.querySelectorAll('img')
    let num = 0.5;
    let imagesArray = Array.prototype.slice.call(imagesList).reverse()
    for(let img of imagesArray) {
      let imgSource = img.src;
      img.setAttribute('number', Math.round(num))
      img.setAttribute('isOpenned', false)
      num += 0.5
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
    let typeValue;
    let imagesArray = document.querySelectorAll('img')
    board.addEventListener('click', (event) => {
      if (event.target.getAttribute('type') === 'mine') {
        event.target.src = this.minePath;
        typeValue = false;
      } else if (event.target.getAttribute('type') === 'clear') {
        event.target.src = this.clearPath;
        typeValue = true;
        let num = event.target.getAttribute('number')
        event.target.removeAttribute('number')
        for(let img of imagesArray) {
          if (img.getAttribute('number') === num) {
            img.src = this.minePath
          }
        }
      }
      if(typeValue === false) {
        if (confirm('You lose! Try again?')) {
          board.innerHTML = ''
          this.load
        } else {
          this.minesCoverOff
        }
      }
    })
  }

  get minesCoverOff() {
    let imagesArray = document.querySelectorAll('img')
    for(let img of imagesArray) {
      if (img.getAttribute('type') === 'mine') {
        img.src = this.minePath
      } else if (img.getAttribute('type') === 'clear') {
        img.src = this.clearPath
      } else {
        alert('Error')
      }
    }
  }

  get load() {
    this.minesLoad
    this.minesCoverSet
    this.imageClick
  }
}

let gameLoaded = new Game('images/mine.png', 5, 'images/right.jpg', 'images/cover.jpg')
gameLoaded.load