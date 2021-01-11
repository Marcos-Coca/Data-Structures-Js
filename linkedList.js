export class MyNode{
    constructor(value,next = null){
        this.value = value;
        this.next = next;
    }
}

class LinkedList{
    constructor(value){
        this.head = new MyNode(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = new MyNode(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this;
    }

    prepend(value){
        const newNode = new MyNode(value,this.head);
        this.head = newNode;
        this.length ++;
    }

    insert(index,value){
        if(index >= this.length){
            return this.append(value);
        } 

        const newNode = new MyNode();
        const firstPointer  = this.getTheIndex(index - 1);
        const holdingPointer = firstPointer.next;
        firstPointer.next = newNode;
        newNode.next = holdingPointer;

        this.length++;

        return this;

    }
    getTheIndex(index){
        let currentNode = this.head;
        for(let i = 1; i <= index; i++){
            if(index === i){
                return currentNode;
            }
            currentNode = currentNode.next
        }

    }

}


const linkedList = new LinkedList(3);