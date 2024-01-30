/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    
    let stack = [];
    let operator = ['-', '+', '/', '*'];

    for ( let token of tokens ) {
        if ( operator.includes(token) ) {
            let num2 = stack.pop();
            let num1 = stack.pop();
            switch ( token ) {
                case '-':
                    stack.push( num1 - num2 );
                    break;
                case '+':
                    stack.push( num1 + num2 );
                    break;
                case '/':
                    stack.push(Math.trunc( num1 / num2 ));
                    break;
                case '*':
                    stack.push( num1 * num2 );
                    break;
            }
        } else {
            stack.push(Number(token));
        }
    }

    return stack.pop();

};
