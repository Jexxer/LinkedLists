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

// import LinkedList
const LinkedList = require('./LinkedList')

// Create empty LinkedList
const linkedList = new LinkedList();

// v Start playing with the methods below v

// Example: Add some values to linkedList.
linkedList.push(12);
linkedList.push(45);
linkedList.push(77);
linkedList.push(28);

// Example: insert element 100 at index 3 of our LinkedList.
linkedList.insert(100, 3);

// Example: insert element 1 at the last index of our LinkedList.
linkedList.insert(1, linkedList.length)

// Example: print our linkedList list in array format.
linkedList.print();