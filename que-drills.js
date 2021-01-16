const MyQueue = require('./que-class.js')
const DoublyQueue = require('./doubly-que-class.js')

function newQue(){
    const starTrekQ = new MyQueue()
    starTrekQ.enqueue('Kirk')
    starTrekQ.enqueue('Spock')
    starTrekQ.enqueue('Uhura')
    starTrekQ.enqueue('Sulu')
    starTrekQ.enqueue('Checkov ')
    // remove Spock from the queue and display the resulting queue
    starTrekQ.dequeue();
    starTrekQ.dequeue();
    console.log('---After removing Spock---')
     display(starTrekQ);

  return starTrekQ;
}
//console.log(newQue())

// HELPERS
// #2

function peek(que){
    if(isEmpty(que)){
        return 'Stack is Empty'
    }
    return que.first
}

function isEmpty(que){
    let currNode = que.first
    if (!currNode) return true
    return false
}

function display(que){
    if(isEmpty(que)){
        return 'Stack is Empty'
    }
      let iteratedNode = que.first
      console.log('<= START =>')
      while(iteratedNode !== null) {
        console.log(iteratedNode.value)
        iteratedNode = iteratedNode.next
      }
      console.log('<= END =>')
}
//console.log(display(starTrekQ))


function mainDoubly() {
    const starTrekDoublyQ = new DoublyQueue();
    starTrekDoublyQ.enqueue('Kirk');
    starTrekDoublyQ.enqueue('Spock');
    starTrekDoublyQ.enqueue('Uhura');
    starTrekDoublyQ.enqueue('Sulu');
    starTrekDoublyQ.enqueue('Checkov');
  
    console.log(starTrekDoublyQ)
    console.log('first')
    console.log(peek(starTrekDoublyQ))

  }

  //mainDoubly();

  module.exports = { peek, isEmpty, display };