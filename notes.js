/* A standard way to implement a stack is using a singly linked list with constraints on its operations, 
where items can be inserted and deleted at only 1 place, the end of the list.*/


// Creates a node containing the data and a reference to the next item
class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

/*A stack has 2 primary functions:

push(): places data onto the top of a stack
pop(): removes data from the top of the stack

*/

class Stack {
    constructor() {
        this.top = null;
    }
    /*The insertion operation in a stack is limited to only inserting 
    onto the top of the stack. This operation is called "push". 
    The following is an illustration of how a node with the key C 
    is pushed onto the stack and how the stack looks like after the item is added.*/

    push(data) {
        /* If the stack is empty, then the node will be the
           top of the stack */
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        /* If the stack already has something, 
           then create a new node,
           add data to the new node, and
           have the pointer point to the top */
        const node = new _Node(data, this.top);
        this.top = node;
    }

    /*Removal from a stack is also limited to the top of the stack 
    and is called "pop". The following is an illustration of
    how a node with the key C is popped (removed) from the stack
     and how the stack looks like after the item is removed.*/

    pop() {
        /* In order to remove the top of the stack, you have to point
           the pointer to the next item and that next item becomes the
           top of the stack */
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}

/* A queue is a data structure that models a FIFO (First In First Out) operation.
A more practical example of a queue is the event loop of a web browser. 
As different events are being triggered, (e.g., the click of a button)


The main functions of a queue include:

enqueue(data): adds data to a queue (insertion)
dequeue(): removes the oldest data added to a queue (deletion)


*/

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }
    /*The insertion operation in a queue is limited to only 1 place, 
    the end of the queue. This is called enqueue. For example, 
    in the following illustration suppose you have an existing queue, 
    and you want to add an item Pris in the queue. 
    The only place Pris will be added is the end of the queue.*/

    enqueue(data) {
        const node = new _Node(data);

        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            this.last.next = node;
        }
        //make the new node the last item on the queue
        this.last = node;
    }

    /*The Removal operation in a queue is limited to only 1 place as well, 
    the beginning of the queue. This is called dequeue. 
    For example, in the following illustration suppose 
    you have an existing queue. The only place you can remove an 
    item from is the beginning of the queue. 
    So, if you want to remove something from this queue, 
    Rachael will be removed.
*/

    dequeue() {
        //if the queue is empty, there is nothing to return
       if (this.first === null) {
           return;
       }
       const node = this.first;
       this.first = this.first.next;
        //if this is the last item in the queue
       if (node === this.last) {
           this.last = null;
       }
       return node.value;
   }
}