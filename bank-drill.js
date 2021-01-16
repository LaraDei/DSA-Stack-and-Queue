const MyQueue = require('./que-class')
const {display } = require('./que-drills.js');

class Bank extends MyQueue {
    constructor(rejectionRate) {
        super();
        this.rejectionRate = rejectionRate;
    }
    serveNext() {
        // Serve the next customer
        let customer = this.dequeue();
        // x% of the time, send them to the back of the line
        if (Math.random() < this.rejectionRate) { //
            this.enqueue(customer);
            console.log(`${customer} sent to back of line`);
        } else {
            console.log(`${customer} served`);
        }
    }
}

let obsidian = new Bank(.25);

obsidian.enqueue(1);
obsidian.enqueue(2);
obsidian.enqueue(3);
obsidian.enqueue(4);
obsidian.enqueue(5);

obsidian.serveNext();
display(obsidian);
obsidian.serveNext();
display(obsidian);
obsidian.serveNext();
display(obsidian);
obsidian.serveNext();
display(obsidian);
obsidian.serveNext();
display(obsidian);