function averageLengthOfWords(...args) {
  const wordsLength = args.map((val) => val.length)
  const avgLength = wordsLength.reduce((acc, val) => acc += val) / wordsLength.length
  return avgLength;
}


const avg = averageLengthOfWords('Привет', 'Hey', 'Howyoudoing', 'one')
alert(Math.round(avg))