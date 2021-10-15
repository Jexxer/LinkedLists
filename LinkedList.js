class LinkedList {

    // on creation of LinkedList, initialize head, next;
    length = 0;
    head = null;

    get isEmpty(){
        return this.length === 0;
    }

    /**
     * Creates a new node where next points to null.
     * This method is a helper method and should not be called by the user.
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
            let current = this.head;

            // Iterate through the LinkedList until we
            // reach the tail (last node in linked list 
            // where its next property points to null)
            while(current.next !== null){
                current = current.next;
            }
            
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
            let previous = this.head;

            // Iterate through the LinkedList until we reach the user specified index.
            for(let i = 0; i < index - 1; i++){
                previous = previous.next;
            }

            // Point our newly created node to the next node.
            node.next = previous.next;

            // Point the previous node to our new node.
            previous.next = node;
        }

        // Increment the length of LinkedList counter by one.
        this.length++;
        return true;
    }

    toString(){
        if(!this.length) return '';

        let str = `${this.head.element}`;
        let current = this.head;

        for(let i = 0; i < this.length - 1; i++) {
            current = current.next;
            str += `,${current.element}`;
        }

        return str;
    }

    print(){
        let arr = [];

        if(this.length){
            let current = this.head;

            for(let i = 0; i < this.length; i++){
                arr.push(current);
                current = current.next;
            }
        }

        console.log(arr)
    }

}



module.exports = LinkedList;