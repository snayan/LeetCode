/*

给定两个非空链表来表示两个非负整数。位数按照逆序方式存储，它们的每个节点只存储单个数字。将两数相加返回一个新的链表。
你可以假设除了数字 0 之外，这两个数字都不会以零开头。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807

 */

// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}
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

/* 方法二 */
var addTwoNumbers = function(l1, l2) {
  let l3 = new ListNode(0);
  let result = l3;
  let sum;
  let pre;
  while (l1 && l2) {
    sum = l1.val + l2.val + l3.val;
    if (sum > 9) {
      l3.val = sum - 10;
      l3.next = new ListNode(1);
    } else {
      l3.val = sum;
      l3.next = new ListNode(0);
    }
    pre = l3;
    l1 = l1.next;
    l2 = l2.next;
    l3 = l3.next;
  }
  if (l1) {
    l3.val = l1.val + l3.val;
    l3.next = l1.next;
  } else if (l2) {
    l3.val = l2.val + l3.val;
    l3.next = l2.next;
  }
  if (l3.val === 0 && (!l1 && !l2)) {
    pre.next = null;
  }
  // 当前l3元素大于9
  while (l3.val > 9) {
    l3.val = l3.val - 10;
    if (l3.next) {
      l3.next.val += 1;
      l3 = l3.next;
    } else {
      l3.next = new ListNode(1);
    }
  }
  return result;
};

/* 方法三 */
var addTwoNumbers = function(l1, l2) {
  let l3 = l1;
  let sum;
  let pre;
  while (l1 && l2) {
    sum = l1.val + l2.val;
    if (sum > 9) {
      l1.val = sum - 10;
      if (l1.next) {
        l1.next.val += 1;
      } else {
        l1.next = new ListNode(1);
      }
    } else {
      l1.val = sum;
    }
    pre = l1;
    l1 = l1.next;
    l2 = l2.next;
  }
  if (l2) {
    pre.next = l2;
    l1 = l2;
  }
  // 当前l3元素大于9
  while (l1 && l1.val > 9) {
    l1.val = l1.val - 10;
    if (l1.next) {
      l1.next.val += 1;
      l1 = l1.next;
    } else {
      l1.next = new ListNode(1);
    }
  }
  return l3;
};

//auto create ListNode instance from array
function createNode(a) {
  let head = new ListNode(0);
  let next = head;
  for (let i = 0, j = a.length; i < j; i++) {
    next.val = a[i];
    if (i !== j - 1) {
      next.next = new ListNode(0);
    }
    next = next.next;
  }
  return head;
}
let l1 = createNode([2, 4, 3]);
let l2 = createNode([5, 6, 4]);
let l3 = addTwoNumbers(l1, l2);

console.log(l1);
console.log(l2);
console.log(l3);
