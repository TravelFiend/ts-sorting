import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbers = new NumbersCollection([12, 4, -96, 389, 0]);
numbers.sort();
console.log(numbers.data);

const characters = new CharactersCollection('ChwjrDhdjkbQpxka');
characters.sort();
console.log(characters.data);

const linkedList = new LinkedList()
linkedList.add(762);
linkedList.add(34);
linkedList.add(-523);
linkedList.add(0);
linkedList.add(-26);

linkedList.sort();
linkedList.print();


