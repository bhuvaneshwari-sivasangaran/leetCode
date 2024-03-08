/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {

    let count = 0;
    let list = head;

    while( list ) {
        count++;
        list=list.next;
    }

    console.log(count);
    list = head;

    let start = 0;

    while( start < Math.floor( count / 2 ) && list ) {
        start++;
        list=list.next;
    }

    return list;
    
};
