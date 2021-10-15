class Node:
    def __init__ (self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__ (self):
        self.length = 0
        self.head = None

    def push(self, data):
        node = Node(data)

        if(self.head == None):
            self.head = node
        else:
            current = self.getNodeAt(self.length - 1)
            current.next = node

        self.length += 1
        return self.length

    def insert(self, data, index = 0):
        if(index < 0 or index > self.length): return False

        node = Node(data)

        if(index == 0):
            node.next = self.head
            self.head = node
        else:
            previous = self.getNodeAt(index - 1)
            node.next = previous.next
            previous.next = node

        self.length += 1
        return True

    def getNodeAt(self, index):
        if(index == None or index < 0 or index >= self.length): return None
        if(index == 0): return self.head

        current = self.head

        for i in range(index):
            current = current.next
        
        return current

    def get(self, index):
        node = self.getNodeAt(index)
        return node if node else None

    def remove(self, index = 0):
        if(index < 0 or index > self.length): return None

        removedNode = self.head

        if(index == 0):
            self.head = self.head.next
        else:
            previous = self.getNodeAt(index - 1)
            removedNode = previous.next
            previous.next = removedNode.next

        self.length -= 1
        return removedNode.data

    def indexOf(self, data):
        current = self.head

        if(current.data == data): return 0

        for i in range(self.length):
            if(current.data == data): return i
            current = current.next

        return -1

    def contains(self, data):
        return self.indexOf(data) != -1

    def toString(self):
        if(self.length == 0): return ""

        string = f"{self.head.data}"
        current = self.head

        for i in range(self.length - 1):
            current = current.next
            string += f",{current.data}"

        return string

    def print(self):
        arr = []

        if(self.length != 0):
            current = self.head

            for i in range(self.length):
                arr.append(current)
                current = current.next

        print(arr)

        

            

