/**
 * Implement a stack data structure in a programming language of your choice. Then write
   functions to push (push) an element, pop (pop) an element, and check if the stack is empty
 */

class DataStructure<T> {
   private stack: T[]

   constructor() {
      this.stack = []
   }

   get() {
      return this.stack
   }

   push(value: T) {
      this.stack[this.stack.length] = value
      return this
   }

   pop() {
      if (!this.isEmpty()) {
         this.stack.splice(-1)
      }
      return this
   }

   isEmpty(): Boolean {
      return !this.stack?.length
   }
}

const stack = new DataStructure<number>()

console.log('Data Structure')
console.log('Check if is empty: ', stack.isEmpty())
console.log('Add value 5')
stack.push(5)

console.log('Add value 2')
stack.push(2)

console.log('Add value 9')
stack.push(9)

console.log('Show stack: ', stack.get())
console.log('Check if is empty: ', stack.isEmpty())

console.log('Pop')
stack.pop()


console.log('Show stack after pop: ', stack.get())

console.log('2x Pop')
stack.pop().pop()

console.log('Check if is empty: ', stack.isEmpty())