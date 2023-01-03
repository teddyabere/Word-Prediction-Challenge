class MakeNode {
  //Constructor, Time O(1), Space O(1)
  constructor (c) {
    this.data = c
    this.children = {} //array
    this.isEnd = false
  }
}

class Tree {
  //Constructor, Time O(1), Space O(1)
  constructor () {
    this.root = new MakeNode('')
  }

  //insert a word into the trie, iteration
  //Time O(s), Space O(s), s is word length
  insertToTree (word) {
    let node = this.root
    for (let ch of word) {
      if (node.children[ch] == null) node.children[ch] = new MakeNode(ch)
      node = node.children[ch]
    }
    node.isEnd = true
  }

  //returns all words with given prefix, call recursion function
  //Time O(n), Space O(n), n is number of nodes included(prefix and branches)
  searchWord (prefix) {
    var node = this.root
    var res = []
    for (let ch of prefix) {
      node = node.children[ch]
      if (node == null) return res
    }
    this.recursiveFunc(node, res, prefix.substring(0, prefix.length - 1))
    return res
  }

  //recursive function called by autocomplete
  //Time O(n), Space O(n), n is number of nodes in branches
  recursiveFunc (node, res, prefix) {
    if (node.isEnd) res.push(prefix + node.data)
    for (let child in node.children) //array
      this.recursiveFunc(node.children[child], res, prefix + node.data)
  }
}
