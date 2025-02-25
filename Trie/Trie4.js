// practice 

class TrieNode{
    constructor(){
        this.children = {};
        this.isEndOfWord = false;
    }

}


class Trie4{
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

    search(word){
        let node = this.root;
        for(let char of word){
            if(!node.children[char]){
                return false;
            }
            node = node.children[char];
        }

       return node.isEndOfWord;
    }

    delete(word){
        let node = this.root;
        for(let char of word){
            if(!node.children[char]) return false;
            node = node.children[char];
        }

        if(node.isEndOfWord) node.isEndOfWord=false;
    }

    prefix(word){
        let node = this.root;
        for(let char of word){
            if(!node.children[char]) return false;
            node = node.children[char]
        }

        return true;
    }

    autoComplete(prefix){
        let node = this.root;

        for(let char of prefix){
            if(!node.children[char]) return []
            node = node.children[char]
        }

        let queue = [[node,prefix]]
        let results=[];

        while(queue.length){
            const [currentNode , word] = queue.shift();

            if(currentNode.isEndOfWord){
                results.push(word)
            }

            for(let char in currentNode.children){
                queue.push([currentNode.children[char],word+char])
            }
        }
        return results;
    }


    longestPrefix(){
        let node = this.root;
        let prefix=""
        while(node && !node.isEndOfWord && Object.keys(node.children).length===1){
            let char = Object.keys(node.children)[0];
            prefix+=char;
        }
        return prefix
    }
}


const trie4 = new Trie4();

trie4.insert("")