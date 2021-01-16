//9. Square dance pairing
const MyQueue = require('./que-class')
const {display } = require('./que-drills.js');

class PairingMachine {
    constructor() {
        this.mQ = new MyQueue;
        this.fQ = new MyQueue;
    }
    femaleArrives(name) {
        if (this.mQ.first) {
            console.log(`${name} paired with ${this.mQ.dequeue()}`);
        } else {
            this.fQ.enqueue(name);
        }
    }
    maleArrives(name) {
        if (this.fQ.first) {
            console.log(`${this.fQ.dequeue()} paired with ${name}`);
        } else {
            this.mQ.enqueue(name);
        }
    }
    displayQueues() {
        console.log(`Males:`);
        display(this.mQ);
        console.log(`Females:`);
        display(this.fQ);
    }
}

let p = new PairingMachine;

p.femaleArrives('Judy');
p.femaleArrives('Ruth');

p.displayQueues();

p.maleArrives('Joe');
p.maleArrives('Bob');
p.maleArrives('Bernardo')

p.displayQueues();