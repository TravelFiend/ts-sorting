"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var numbers = new NumbersCollection_1.NumbersCollection([12, 4, -6, 389, 0]);
var characters = new CharactersCollection_1.CharactersCollection('ChwjrDhdjkbQpxka');
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(762);
linkedList.add(34);
linkedList.add(-523);
linkedList.add(0);
linkedList.add(-26);
var sorter1 = new Sorter_1.Sorter(numbers);
var sorter2 = new Sorter_1.Sorter(characters);
var sorter3 = new Sorter_1.Sorter(linkedList);
sorter1.sort();
sorter2.sort();
sorter3.sort();
console.log(numbers.data);
console.log(characters.data);
linkedList.print();
