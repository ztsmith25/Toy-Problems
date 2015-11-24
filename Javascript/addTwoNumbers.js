/*
You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
*/

var addTwoNumbers = function(l1, l2) {

  //takes a list and returns the values as a string

  var listToNum = function(list) {
    var numString = list.val.toString(),
      next = list.next;
    while (next) {
      numString += next.val.toString();
      next = next.next;
    }
    return numString;
  };

  //reverses a number(as a string)

  var revNum = function(numString) {
    var numArray = numString.split(''),
      placeHolder = null,
      newString = '';
    for (var i = 0; i <= Math.floor((numArray.length - 1) / 2); i++) {
      placeHolder = numArray[numArray.length - 1 - i];
      numArray[numArray.length - 1 - i] = numArray[i];
      numArray[i] = placeHolder;
    }
    return parseInt(numArray.join(''), 10);
  };

  //takes a number and converts it to a linked list

  var numToList = function(num) {
    num = num.toString();
    var list = new ListNode(parseInt(num.charAt(num.length - 1), 10));
    var head = list,
      tail = list;
    for (var i = num.length - 2; i >= 0; i--) {
      tail.next = new ListNode(parseInt(num.charAt(i), 10));
      tail = tail.next;
    }
    return list;
  }

  var sum = revNum(listToNum(l1)) + revNum(listToNum(l2));
  return numToList(sum);
};
