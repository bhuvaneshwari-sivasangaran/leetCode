var findMatrix = function(nums) {

    let ans = [];

    for ( const num of nums ) {
        let present = false;
        for ( const row of ans ) {
            if ( !row.includes(num) ){
                present = true;
                row.push(num);
                break;
            }
        }
        if(!present) {
            ans.push([num]);
        }
    }

    return ans;

};

