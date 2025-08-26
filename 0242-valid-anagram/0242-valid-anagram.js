/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
   if(s.length !== t.length) return false

     let table = {};

     for( let val of t ){
        if( table [val] ){
            table [val] ++
        }else{
            table [val] =1
        };
     };
    
    for( let val of s ){

        if( table[val] ===undefined ){

            return false
        }

        if(table[val]<1){
            return false
        }
        table[val] -=1;
    };
    return true;

};