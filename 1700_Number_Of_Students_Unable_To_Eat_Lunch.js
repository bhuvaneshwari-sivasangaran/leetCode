/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    
    let n = students.length;
    let visited = new Array(n).fill(0);

    for ( let i = 0 ; i < n ; i++ ) {

        let flag = 0;
        for ( let j = 0 ; j < n ; j++ ) {
            if ( students[j] === sandwiches[i] && visited[j] == 0 ) {
                flag = 1;
                visited[j] = 1;
                break;
            }
        }
        if ( flag == 0 ) {
            return n - i;
        }

    }

    return 0;

};
