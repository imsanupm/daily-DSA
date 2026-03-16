/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    
    if(!head || !head.next){
        return true;
    }
    let slow = head;
    let fast = head;

    while(fast!=null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    };

    let prev = null;
    let curr = slow;

    while(curr) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    };

    let second = prev;
    let first = head;
    while(second) {

        if(second.val != first.val) {

            return false;

        };

    second = second.next;
    first = first.next;

    };

    return true;
};