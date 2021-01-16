const MyStack = require('./stack-class.js')

class Queue extends MyStack {
    constructor() {
        super();
        this.auxStack = new MyStack;
    }
    enqueue(data) {
        while (this.next) {
            this.auxStack.push(this.pop());
        }
        this.push(data);
        while (this.auxStack.next) {
            this.push(auxStack.pop());
        }
    }
    dequeue() {
        return this.pop().data;
    }
}

let trekQ = new Queue();
trekQ.enqueue('Kirk');
trekQ.enqueue('Spock');
trekQ.enqueue('Uhura');
trekQ.enqueue('Sulu');
trekQ.enqueue('Checkov');

console.log(trekQ);

trekQ.dequeue();

console.log(trekQ);