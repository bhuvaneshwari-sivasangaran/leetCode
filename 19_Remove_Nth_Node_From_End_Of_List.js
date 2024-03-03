/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode()
    dummy.next = head

    let firstPointer = dummy
    let secondPointer = dummy

    for(let i = 0; i < n; i++){
        secondPointer = secondPointer.next
    }

    while(secondPointer.next){
        firstPointer = firstPointer.next
        secondPointer = secondPointer.next
    }

c    firstPointer.next = firstPointer.next.next

    return dummy.next
};
