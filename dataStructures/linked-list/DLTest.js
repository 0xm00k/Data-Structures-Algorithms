class DLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        
        this.tail = this.head
        this.length = 1
    }

    append(value) {
        const newNode = {
            value: value,
            next: null,
            prev: null
        }

        const currentTail = this.tail;

        this.tail = newNode;

        this.tail.prev = currentTail

        currentTail.next = newNode;

        this.length++;
    }

     logList() {
        let array = []
        let currentHead = this.head;
        while (currentHead != null) { 

            array.push(currentHead.value);
            currentHead = currentHead.next;
        }
        return array
    }

    //5-6-7
}

const linkedList = new DLinkedList(10)
linkedList.append(5)
linkedList.append(15)
console.log(linkedList.logList())