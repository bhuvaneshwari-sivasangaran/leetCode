/**
 * @param {number[][]} flowers
 * @param {number[]} people
 * @return {number[]}
 */
var fullBloomFlowers = function(flowers, people) {
    let startArr=flowers.map(v=>v[0]).sort((a,b) => a-b)
    let endArr=flowers.map(v=>v[1]).sort((a,b) => a-b)
    return people.map(time=>lessThanEqualTo(time,startArr)-lessThanEqualTo(time-1,endArr))

    function lessThanEqualTo(target,arr){
        let [i,j]=[0,arr.length-1],mid,ans=Number.MIN_SAFE_INTEGER

        while(i<=j){
            mid=i+~~((j-i)/2)
            if(arr[mid]<=target) i=mid+1
            else j=mid-1
        }
        return i
    }
};
