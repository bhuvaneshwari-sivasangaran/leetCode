/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    const result = [];
    for(let op of operations){
        switch(op) {
            case "+":
                result.push(result.at(-1)+result.at(-2))
            break;
            case "D":
                result.push(2*result.at(-1));
            break;
            case "C":
                result.pop();
            break;
            default:
                result.push(Number(op))
        }
    }
    return result.reduce((sum, num) => sum+num, 0);
};
