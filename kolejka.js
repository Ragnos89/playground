class Client {
    constructor(next,name) {
        this.next = next;
        this.name = name;
    }
}

class Queue {
    constructor() {
        this.queue = null;
    }
    add(element) {
        let head = this.queue;
        let newElement = new Client(null,element);
        if (!head) {
            this.queue = newElement;
        } else {
            let tempElement = head;
            while (tempElement.next) {
                tempElement = tempElement.next;
            }
            tempElement.next = newElement;
        }
    }
    remove() {
        let head = this.queue
        if (!head) return 'Kolejka jest pusta';
        this.queue = head.next;
        return head.name;
    }
    peek() {
        if (!this.queue) return 'Kolejka jest pusta';
        return this.queue.name;
    }
    show_queue() {
        if (!this.queue) return 'Kolejka jest pusta';
        let  temp = new Client(this.queue.next,this.queue.name);
        if(temp.next === null) {
          console.log(temp.name);
          return 'Koniec kolejki';
          } else {
            do {
            console.log(temp.name);
            //console.log(temp.next.name);
            if(temp.next === null) {
              return 'Koniec kolejki';
            } else {
            temp.name = temp.next.name;
            temp.next = temp.next.next;
            } 
           }  while (temp.name);
        }
    } 
}
let q1 = new Queue();
q1.add('Karol');
q1.add('Bartek');
q1.add('Michał');
q1.add('Mateusz');
console.log(q1.show_queue());
//q1.remove();
//console.log(q1.peek());
//console.log(q1.queue.next.name);