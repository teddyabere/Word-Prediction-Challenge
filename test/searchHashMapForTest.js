class MakeNode {
  //Constructor, Time O(1), Space O(1)
  constructor(c) {
    this.data = c;
    this.isEnd = false;
    this.children = new Map(); //map
  }
}

class Tree {
  //Constructor, Time O(1), Space O(1)
  constructor() {
    this.root = new MakeNode("");
  }

  //inserts a word into the trie. Time O(s), Space O(s), s is word length
  insertToTree(word) {
    var node = this.root;
    for (let ch of word) {
      if (!node.children.has(ch)) node.children.set(ch, new MakeNode(ch));
      node = node.children.get(ch);
    }
    node.isEnd = true;
  }

  //find all word with given prefix, call recursion function
  //Time O(n), Space O(n), n is number of nodes involved (include prefix and branches)
  searchWord(word) {
    var res = new Array();
    var node = this.root;
    for (let ch of word) {
      if (node.children.has(ch)) node = node.children.get(ch);
      else return res;
    }
    this.recursiveFunc(node, res, word.substring(0, word.length - 1));
    return res;
  }

  //recursive function called by autocomplete
  //Time O(n), Space O(n), n is number of nodes in branches
  recursiveFunc(node, res, prefix) {
    if (node.isEnd) res.push(prefix + node.data);
    for (let c of node.children.keys())
      this.recursiveFunc(node.children.get(c), res, prefix + node.data);
  }
}

module.exports = Tree;
