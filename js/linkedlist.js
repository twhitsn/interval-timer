'use strict';

class TimerNode {
    constructor(obj) {
        this.secs = obj['mins'] * 60 + obj['secs'];
        this.reps = obj['reps'];
        this.exercise = obj['exercise'];

        // linked list
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    push(node){
        if(this.head === null && this.tail === null){ // first item
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
    }
}
