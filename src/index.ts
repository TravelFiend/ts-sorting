import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbers = new NumbersCollection([12, 4, -6, 389, 0])
const characters = new CharactersCollection('ChwjrDhdjkbQpxka');

const sorter1 = new Sorter(numbers);
const sorter2 = new Sorter(characters);

sorter1.sort();
sorter2.sort();

console.log(numbers.data);
console.log(characters.data);
