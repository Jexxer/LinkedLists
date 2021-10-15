const LinkedList = require('./LinkedList')

const linkedList = new LinkedList();

linkedList.push(12);
linkedList.push(45);
linkedList.push(77);
linkedList.push(28);

linkedList.insert(100, 3);
linkedList.insert(1, linkedList.length)

console.log(linkedList.toString());
linkedList.print();