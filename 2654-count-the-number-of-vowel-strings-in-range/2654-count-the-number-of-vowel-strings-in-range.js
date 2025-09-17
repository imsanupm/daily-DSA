/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    // let obj = {
    //     1:"a",
    //     2:"e",
    //     3:"i",
    //     4:"o",
    //     5:"u"
    // };
    let obj = {
        "a":"a",
        "e":"e",
        "i":"i",
        "o":"o",
        "u":"u"
    };
    let count = 0;
    for(let i = left; i<=right;i ++){
        let word = words[i];
       
            //console.log(obj[word[0]])
               console.log(word[0],word[word.length-1] )
        if(obj[word[0]] && obj[word[word.length-1]] ){
               // console.log(word[0],word[word.length-1])
           
            count++
        }
    }
    return count
    
};