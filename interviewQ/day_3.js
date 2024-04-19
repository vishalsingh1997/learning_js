/*
generate a hashtag from a sentence wherefirst 
letter of each word shold be capital and with having prefix '#' 
*/

para = "my name is chota don"  //  #MyNameIsChotaDon

const hashtagGenerator = (str) => {

    arr = str.split(" ")

    firstLetter = arr.map((val) => {
        return val.replace(val[0], val[0].toUpperCase())
    });

    return `#${firstLetter.join('')}`

}

console.log(hashtagGenerator(para));