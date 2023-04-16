const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.tree = null;
  }

  root() {
    if(!this.tree) {
      return null
    } else {
      return this.tree;
    }
    
    /* throw new NotImplementedError('Not implemented'); */
    // remove line with error and write your code here
  }

  add(data) {
    /* throw new NotImplementedError('Not implemented'); */
    this.tree = addValue(this.tree, data);

    function addValue(node, value) {
      if(!node) {
        return new Node(value);
      }

      if(node.data === value) {
        return node;
      }

      if(value < node.data) {
        node.left = addValue(node.left, value);
      } else {
        node.right = addValue(node.right, value);
      }

      return node;
    }



    /* throw new NotImplementedError('Not implemented'); */
    // remove line with error and write your code here
  }

  has(data) {
    /* throw new NotImplementedError('Not implemented'); */
    return hasValue(this.tree, data);

    function hasValue(node, value) {
      if(!node) {
        return false;
      }

      if(node.data === value) {
        return true;
      }

      return value < node.data ? hasValue(node.left, value) : hasValue(node.right, value)

    }

    /* throw new NotImplementedError('Not implemented'); */
    // remove line with error and write your code here
  }

  find(data) {
/*     throw new NotImplementedError('Not implemented'); */
    return findValue(this.tree, data);

    function findValue(node, value) {
      if(!node) {
        return null;
      }

      if(node.data === value) {
        return node;
      }

      return value < node.data ? findValue(node.left, value) : findValue(node.right, value);
    }





    /* throw new NotImplementedError('Not implemented'); */
    // remove line with error and write your code here
  }

  remove(data) {
    /* throw new NotImplementedError('Not implemented'); */
    this.tree = removeNode(this.tree, data);

    function removeNode(node, value) {
      if(!node) {
        return null;
      }

      if(value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      } else if(value > node.data) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        if(!node.left && !node.right) {
          return null;
        }

        if(!node.left) {
          node = node.right;
          return node;
        }

        if(!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while(minRight.right) {
          minRight = minRight.right;
        }

        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);

        return node;
      }
    }


    /* throw new NotImplementedError('Not implemented'); */
    // remove line with error and write your code here
  }

  min() {
    if(!this.tree) {
      return null;
    }

    let node = this.tree;
    while(node.left) {
      node = node.left;
    }

    return node.data;


    /* throw new NotImplementedError('Not implemented'); */
    // remove line with error and write your code here
  }

  max() {
    if(!this.tree) {
      return null;
    }

    let node = this.tree;
    while(node.right) {
      node = node.right;
    }

    return node.data;
    /* throw new NotImplementedError('Not implemented'); */
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};