const str = askString()
const fil = numeralsToText(str)
alert(fil)

//FUNCTIONS//

function askString() {
    return prompt('Enter string: ')
}

function numeralsToText(string) {
    const strList = string.split('');
    strList.filter((value, index) => {
        switch(value) {
            case "0" : strList.splice(index, 1, "zero"); break;
            case "1" : strList.splice(index, 1, "one"); break;
            case "2" : strList.splice(index, 1, "two"); break;
            case "3" : strList.splice(index, 1, "three"); break;
            case "4" : strList.splice(index, 1, "four"); break;
            case "5" : strList.splice(index, 1, "five"); break;
            case "6" : strList.splice(index, 1, "six"); break;
            case "7" : strList.splice(index, 1, "seven"); break;
            case "8" : strList.splice(index, 1, "eight"); break;
            case "9" : strList.splice(index, 1, "nine"); break;
            default: break;
        }
    })
    const filtered = strList.join("")
    return filtered;
}