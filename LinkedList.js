class LinkedList {

    // On creation of LinkedList, initialize head, length;
    length = 0;
    head = null;

    get isEmpty(){
        return this.length === 0;
    }

    /**
     * Creates a new node where next points to null.
     * This method is a helper method and should not be called by the user directly.
     * @param {*} element 
     * @returns Node
     */
    createNode(element){
        return {element, next: null};
    }

    /**
     * This method will push a new element to the end of the LinkedList.
     * @param {*} element
     * @returns new length of LinkedList  
     */
    push(element){
        const node = this.createNode(element);

        // If the LinkedList is empty => The node will become the head of LinkedList.
        // Else => 
        if(this.head === null){
            this.head = node;
        } else {
            let current = this.getNodeAt(this.length - 1);
            
            // point (set the next of tail) the tail to the newly created node.
            current.next = node;
        }

        // Increment the length of LinkedList counter by one.
        this.length++;
        return this.length;
    }

    /**
     * Inserts element to specified index of linked list, if index is not given, will insert at 0th index.
     * @param {*} element 
     * @param {*} index 
     * @returns boolean
     */
    insert(element, index = 0){

        // if the index is out of range or invalid number..
        if(index < 0 || index > this.length) return false;

        const node = this.createNode(element);

        // if index is 0, point the node to the head.
        if(index === 0){
            node.next = this.head;
            this.head = node;
        } else {
            let previous = this.getNodeAt(index - 1);

            // Point our newly created node to the next node.
            node.next = previous.next;

            // Point the previous node to our new node.
            previous.next = node;
        }

        // Increment the length of LinkedList counter by one.
        this.length++;
        return true;
    }

    getNodeAt(index){
        // If the user specified index is out of range, return null.
        if(index === undefined || index < 0 || index >= this.length) return null;

        // If the index is 0, Return the head element.
        if(index === 0) return this.head;

        let current = this.head

        // Iterate through the LinkedList until the user specified index has ben reached.
        for(let i = 0; i < index; i++){
            current = current.next;
        }

        return current;
    }

    /**
     * Returns the value/element of the user specified index
     * @param {Number} Integer
     * @returns Value of Node
     */
    get(index){
        const node = this.getNodeAt(index);
        return node ? node.element : null;

    }

    /**
     * Takes Integer as param and removes Node at that index in the LinkedList.
     * @param {number} index 
     * @returns Integer
     */
    remove(index = 0){
        // If the index is out of range, return null.
        if(index < 0 || index > this.length) return null;

        // Initialize the element to be removed to the Head of LinkedList.
        let removedNode = this.head;

        // If the index is zero or not given, set the current head to the next element in LinkedList.
        if(index === 0){
            this.head = this.head.next;
        } else {
            // Call getNodeAt() to Iterate through the LinkedList and return Node that points to the Node to be removed.
            let previous = this.getNodeAt(index - 1);

            // Over-write the removedNode to be it's next element.
            removedNode = previous.next;

            // Point the previous Node to the Node that comes after our "Removed" Node.
            previous.next = removedNode.next;
        }

        this.length--;
        return removedNode.element;
    }
    /**
     * Iterates through linked list and compares param to element of each node. Return index of element with match, otherwise -1.
     * @param {*} element 
     * @returns {Number} Integer
     */
    indexOf(element){

        // Initialize the start of our Iteration.
        let current = this.head;

        // If the Head element matches the param element. return 0.
        if(current.element === element) return 0;

        // Iterate through the LinkedList and compare user input element to each Node until we find a match. Return i if match.
        for (let i = 0; i < this.length; i++){
            if(current.element === element) return i;
            current = current.next;
        }

        // If no match, return -1.
        return -1;
    }

    /**
     * Iterates through to LinkedList and returns true in param element is a Node value in LinkedList.
     * @param {*} element 
     * @returns 
     */
    contains(element){
        return this.indexOf(element) !== -1;
    }

    /**
     * Iterates through the LinkedList and returns the values in sequencial order. Head -> 1 -> 2 -> 3 -> Tail. Seperated by comma.
     * @returns String
     */
    toString(){
        // If the LinkedList is Empty, return an empty string.
        if(!this.length) return '';

        let str = `${this.head.element}`;
        let current = this.head;

        // Iterate through the LinkedList and concatenate the value of each nodes value to the string.
        for(let i = 0; i < this.length - 1; i++) {
            current = current.next;
            str += `,${current.element}`;
        }

        return str;
    }

    /**
     * Console logs LinkedList in array format.
     */
    print(){
        let arr = [];

        // If LinkedList.length !== 0;
        if(this.length){
            let current = this.head;

            // Iterate through the LinkedList and push each element to array.
            for(let i = 0; i < this.length; i++){
                arr.push(current);
                current = current.next;
            }
        }

        console.log(arr)
    }

}



module.exports = LinkedList;