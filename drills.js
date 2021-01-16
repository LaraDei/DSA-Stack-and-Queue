const MyStack = require('./stack-class')
const starTrek = new MyStack

function newStack(){
    //const starTrek = new MyStack()
    starTrek.push('Kirk')
    starTrek.push('Spock')
    starTrek.push('McCoy')
    starTrek.push('Scotty')
}
newStack()

// HELPERS
// #2

function peek(stack){
    if(isEmpty(stack)){
        return 'Stack is Empty'
    }
    return stack.top
}

function isEmpty(stack){
    let currNode = stack.top
    if (!currNode) return true
    return false
}

function display(stack){
    if (!stack.top) {
        console.log('This stack has no items')
        return
      }
      let iteratedNode = stack.top
      console.log('<= START =>')
      while(iteratedNode !== null) {
        console.log(iteratedNode.data)
        iteratedNode = iteratedNode.next
    
      }
      console.log('<= END =>')
}

//#3
function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // Your code goes here
    let stack = new MyStack();
    let reverseStack = '';
  
    for(let i = 0; i < s.length; i++){
        stack.push(s[i]);
    }
    let currNode = stack.top;
    while (currNode !== null) {
      reverseStack = reverseStack + currNode.data;
      currNode = currNode.next;
    }
    //console.log(reverseStack);
  
    if(reverseStack === s){
      return true;
    }
    return false;
  }

// True, true, true, false
// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));

//#4

function matchParentheses(expression) {
    const stack = new MyStack();
    for (let i = 0; i < expression.length; i++) {
        stack.push(expression[i])
    }
  
    let openCount = 0
    let closedCount = 0
    let currNode = stack.top
    while (currNode !== null) {
        if (currNode.data === '(') {
            openCount = openCount + 1
        }
        else if (currNode.data === ')') {
            closedCount = closedCount + 1
        }
        currNode = currNode.next
    }
  
    if (openCount > closedCount) {
        return `Missing ')'`;
    }
  
    if (openCount < closedCount) {
        return `Missing '('`;
    }
  
    if (openCount === closedCount) {
        return `Correct number of '(' and ')'`;
    }
  }
  
//   console.log(matchParentheses('(2*4)'));
//   console.log(matchParentheses('(2*4'));
//   console.log(matchParentheses('2*4)'));

  //#5

  function sortStack(stack) {
    if(!stack.top.next) return stack;
    let sortStack = new MyStack()
  }
//console.log(sortStack(starTrek))