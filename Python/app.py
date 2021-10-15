from LinkedList import LinkedList

linkedList = LinkedList()

linkedList.push(10)
linkedList.push(20)
linkedList.push(30)
linkedList.push(40)

print(linkedList.toString())
linkedList.remove(2)
print(linkedList.toString())
linkedList.print()