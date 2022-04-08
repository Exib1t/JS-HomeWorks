const isogram = askWord()
isWordIsogram(isogram)

//FUNCTIONS//

function askWord(){
    return prompt('Enter your word: ')
}

function isWordIsogram(word){
    for(let i = 0; i < word.length; i++) {
        let result = word.includes(word[i], i+1)
        if (result === true) {
            alert(`${word} is isogram, letter (${word[i]}) more than one`)
            return;
        } 
    }
    alert(`${word} is not isogram, all letters are different`)
}