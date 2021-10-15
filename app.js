// Method that exists for LinkedList: 
//                          .push()
//                          .insert()
//                          .remove()
//                          .get()
//                          .print()
//                          .indexOf()
//                          .contains()
//                          .toString()
// Play with them as you see fit.

const LinkedList = require('./LinkedList')
const linkedList = new LinkedList();

// Add some values to linkedList.
linkedList.push(12);
linkedList.push(45);
linkedList.push(77);
linkedList.push(28);

// insert element 100 at index 3 of our LinkedList.
linkedList.insert(100, 3);

// insert element 1 at the last index of our LinkedList.
linkedList.insert(1, linkedList.length)

// print our linkedList list in array format.
linkedList.print();