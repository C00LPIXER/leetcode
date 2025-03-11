/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let large = 0
    for(let i = 0; i < sentences.length; i++){
        let current = sentences[i].split(" ")
        if(current.length > large){
            large = current.length
        }
    }

    return large
};