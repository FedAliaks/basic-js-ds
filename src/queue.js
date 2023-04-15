const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  list;
 
  getUnderlyingList() {
   return this.list;
 /*    throw new NotImplementedError('Not implemented'); */
    // remove line with error and write your code here
  }
 
  enqueue(value) {
    if(!this.list) {
      this.list = {};
      this.list.value = value;
      this.list.next = null;
    } else {
      let current = this.list;
      let future = this.list.next;
      while(future) {
        current = future;
        future = current.next;
      }
 
      current.next = {
        value: value,
        next: null,
      }
    }
 
 
 
 
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
 
  dequeue() {
    if(!this.list.value) {
     return false;
    } else {
     let future = this.list.next;
     let current = this.list.value;
     this.list = future;
     return current;
    }
 
    /* throw new NotImplementedError('Not implemented'); */
    // remove line with error and write your code here
  }
 }

module.exports = {
  Queue
};
