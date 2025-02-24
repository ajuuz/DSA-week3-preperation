//Auto completion 

class TrieNode{
    constructor(){
        this.children={};
        this.isEndOfWord = false;
    }
}


class Trie2{
    constructor(){
        this.root = new TrieNode();
    }


    insert(word){
        let node = this.root;
        for(let char of word){
            if(!node.children[char]){
                node.children[char]=new TrieNode()
            }
            node = node.children[char]
        }
        node.isEndOfWord=true;
    }


    autoComplete(prefix){
        let node = this.root;

        for(let char of prefix){
            if(!node.children[char]) return [];
            node = node.children[char]
        }

        let queue = [[node,prefix]];
        let results = []

        while(queue.length){
            const [currentNode,word] = queue.shift();

            if(currentNode.isEndOfWord){
                results.push(word)
            }

            for(let char in currentNode.children){
                queue.push([currentNode.children[char],word+char])
            }
        }

        return results;
    }
}

const trie2 = new Trie2();
trie2.insert("apple");
trie2.insert("app");
trie2.insert("applet");
trie2.insert("banana");
trie2.insert("bat");
trie2.insert("batman");
trie2.insert("ball");

console.log(trie2.autoComplete("ba"))