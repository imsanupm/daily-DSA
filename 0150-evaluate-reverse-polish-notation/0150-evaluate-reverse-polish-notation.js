/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {

    let val = new Set(['+', '-', '*','/']);

    let stack = [];

    for(let i = 0; i<tokens.length; i++){

        let char = tokens[i];

        if(val.has(char)){

            let second = stack.pop();

            let first = stack.pop();

            if(char==="+"){

                stack.push(first+second);

            }else if(char==="-"){

                stack.push(first-second)

            }else if(char==="*"){

                    stack.push(first * second)
            }else if(char==="/"){

                    stack.push(first / second|0);
            }
        }else{
            stack.push(Number(char))
        }
    }
    return stack.pop()
};