class ArrayImpl {

    constructor(){
         this.elements = {};
         this.length = 0;
    }

    get(index) {
        return this.elements[index];
    }

    push(element) {
        this.elements[this.length] = element;
        this.length ++;
    }

    pop() {
        const lastElementIndex = this.length-1;

        delete this.elements[lastElementIndex];

        this.length --; 
     }

     deleteAt(index){
        
        delete this.elements[index];

        this.shiftItems(index + 1);

        this.length --;
     }

     shiftItems(indexFrom) {
        for(var i=indexFrom;i<this.length;i++){
            this.elements[i-1] = this.elements[i];
        }

        delete this.elements[this.length-1];
     }
}

const newArray = new ArrayImpl(5);

console.log(newArray);

newArray.push(21);
newArray.push(8);
newArray.push(41);
newArray.push(6);
newArray.push(9);
newArray.push(3);

console.log(newArray);

console.log(" >>>>>>>> POPPING >>>>>>>>");
console.log("");
newArray.pop();

console.log(newArray);

console.log(">>>>>>>> DELETE AT 2 >>>>>>>>");
console.log("");

newArray.deleteAt(2);
console.log(newArray);

newArray.deleteAt(0);

console.log(newArray);




