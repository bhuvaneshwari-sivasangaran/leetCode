/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let num1 = '' , num2 = '' ;
    while(l1 !== null) {
        num1 = l1.val + num1;
        l1 = l1.next;
    }
    while(l2 !== null) {
        num2 = l2.val + num2;
        l2 = l2.next;
    }
    let sum = BigInt(num1) + BigInt(num2);
    let arr = String(sum).split("").reverse().map(Number);
    let list = null;
    for (let i = arr.length - 1; i >= 0; i--) {
        list = { val: arr[i], next: list };
    }
    return list;
}
