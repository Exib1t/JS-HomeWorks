const videos = [
  {
    watches: 435,
    subs: 120,
    source: 'images/img_1.jpg'
  },
  {
    watches: 542,
    subs: 124,
    source: 'images/img_2.jpg'
  },
  {
    watches: 214,
    subs: 624,
    source: 'images/img_3.jpg'
  },
  {
    watches: 5212,
    subs: 251,
  }
]

let template = document.querySelector('#template').innerHTML
let target = document.querySelector('#target')

for(let i = 0; i < videos.length; i++) {
  const str = videos[i];
  let result = Mustache.render(template, str)
  target.insertAdjacentHTML('beforeend', result)
}