import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbers = new NumbersCollection([12, 4, -6, 389, 0])
const characters = new CharactersCollection('ChwjrDhdjkbQpxka');

const linkedList = new LinkedList()
linkedList.add(762);
linkedList.add(34);
linkedList.add(-523);
linkedList.add(0);
linkedList.add(-26);

const sorter1 = new Sorter(numbers);
const sorter2 = new Sorter(characters);
const sorter3 = new Sorter(linkedList);

sorter1.sort();
sorter2.sort();
sorter3.sort();

console.log(numbers.data);
console.log(characters.data);
linkedList.print();
