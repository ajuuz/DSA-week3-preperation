//longest prefix

class TrieNode{
    constructor(){
        this.children={}
        this.isEndOfWord = false;
    }
}
class Trie3{
    constructor(){
        this.root = new TrieNode();
    }

    insert(word){
        let node = this.root;
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
        }
        node.isEndOfWord = true;
    }

    
   


    findLongestPrefix(){
        let node = this.root;
        let prefix=""
        while(node && !node.isEndOfWord && Object.keys(node.children).length===1){
            let char = Object.keys(node.children)[0];
            prefix+=char;
            node = node.children[char]
        }
        return prefix
    }
}

const trie3 = new Trie3()
const array =["flower", "flow", "flight"]
array.forEach(element => {
    trie3.insert(element)
});

console.log(trie3.findLongestPrefix())