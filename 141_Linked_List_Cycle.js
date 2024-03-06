/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    
    if (head === null || head.next === null) {
        return false;
    }
    let second = head;

    while (second && second.next) {
        second = second.next.next;
        head = head.next;
        if (second === head) {
            return true;
        }
    }
    return false;

};
