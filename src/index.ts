export class Sorter {
  constructor(public collection: number[] | string) { }

  sort(): void {
    const { length } = this.collection;

    // BUBBLE SORT
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {

        // if collection is an array of numbers
        if (this.collection instanceof Array) {     //  TYPE GUARD HERE
          if (this.collection[j] > this.collection[j + 1]) {
            const temp = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = temp;
          }
        }

        // if collection is a string
        if (typeof this.collection === 'string') {     //  TYPE GUARD HERE

        }
      }
    }
  }
}

const sorter = new Sorter([381, -432, 0, -143]);

sorter.sort();
console.log(sorter.collection);
