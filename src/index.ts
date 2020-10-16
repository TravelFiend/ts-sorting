import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbers = new NumbersCollection([12, 4, -6, 389, 0])
const sorter = new Sorter(numbers);
sorter.sort();
console.log(numbers.data);
