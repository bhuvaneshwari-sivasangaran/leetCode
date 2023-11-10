/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function(adjacentPairs) {
    let graph = new Map();
    let result = [];

    for ( let [x, y] of adjacentPairs ) {
        if ( !graph.has(x) ) graph.set(x, []);
        if ( !graph.has(y) ) graph.set(y, []);
        graph.get(x).push(y);
        graph.get(y).push(x);
    }

    for ( let [x,y] of graph.entries() ) {
        if ( y.length === 1 ) {
            result = [x, y[0]];
            break;
        }
    }

    while ( result.length < adjacentPairs.length + 1 ) {
        let len = result.length
        const [last, prev] = [result[len - 1], result[len - 2]];
        const current = graph.get(last);
        const next = current[0] !== prev ? current[0] : current[1];
        result.push(next);
    }

    return result;

};
