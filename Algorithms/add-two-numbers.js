/**
 * Created by zhangyang on 06/11/2016.
 */

/*
 You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

 Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 Output: 7 -> 0 -> 8
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    var result = new ListNode(0);
    var sub = 0, a = 0, b = 0, c = 0;
    var ll = result;
    while (l1 || l2) {
        a = b = c = sub = 0;
        if (l1) {
            a = l1.val;
            l1 = l1.next;
        }
        if (l2) {
            b = l2.val;
            l2 = l2.next;
        }
        c = a + b + ll.val;
        if (c > 9) {
            sub = 1;
            ll.val = c - 10;
        } else {
            ll.val = c;
        }
        if (l1 || l2 || sub) {
            ll = ll.next = new ListNode(sub);
        }
    }
    return result;
};