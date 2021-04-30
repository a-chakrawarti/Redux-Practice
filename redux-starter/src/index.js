import { compose, pipe } from "lodash/fp";

const input = "    redux-starter    ";

const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div>${str}</div>`;

// // Currying
const wrapInType = (type) => (str) => `<${type}>${str}</${type}>`;

const toLowerCase = (str) => str.toLowerCase();

const result = wrapInDiv(toLowerCase(trim(input)));

// Higher order function, no paranthesis but needs to read from right -> Left
const transform = compose(wrapInDiv, toLowerCase, trim);
transform(input);

// Same as transform but now Left -> Right, every arg must be a function
const transformTwo = pipe(trim, toLowerCase, wrapInDiv);
transformTwo(input);

// Pipe + Currying

const transformThree = pipe(trim, toLowerCase, wrapInType("h3"));
console.log(transformThree(input));

// Immutability
// Both Object.assign and spread operator does shallow copy

const person = {
  name: "John",
  address: {
    country: "Bangladesh",
    city: "Dhaka",
  },
};
const updated = Object.assign({}, person, { name: "Bob", age: 30 });
// console.log(updated);

const updatedNew = { ...person, name: "Bob" };
updatedNew.address.city = "Chittagong";

// Changes the value of city in original person object due to shallow copy
console.log("Person: ", person);
console.log("Updated Object: ", updatedNew);

// To get around this issue, we use deep copy, there are libraries to get around this verbosity
const latestObj = {
  ...updatedNew,
  name: "Ross",
  address: {
    ...updatedNew.address,
    city: "Rangpur",
  },
};

console.log("LatestObj: ", latestObj);

// ImmutableJS

import { Map } from "immutable";

let book = Map({ title: "Around the world in 80 days" });

console.log(book);
// First Issue: Learn whole new API
console.log(book.get("title"));
// Second Issue: Hard to integrate with other libraries that expects plain old JavaScript Objects
console.log(book.toJS());

function publish(book) {
  return book.set("isPublished", true);
}

book = publish(book);

console.log(book.toJS());

// Immer

import { produce } from "immer";

let newBook = { title: "Maze Runner" };

function newPublish(book) {
  // Accepts initial state and a function that updates the object
  return produce(book, (draftBook) => {
    draftBook.isPublished = true;
  });
}

let updatedBook = newPublish(newBook);

console.log(newBook);
console.log(updatedBook);

console.log("-------------- REDUX --------------");

import store from "./store";
import { bugAdd, bugRemoved, bugResolved } from "./actions";
console.log(store);
console.log(store.getState());

// Gets called everytime the state of the store gets changed
// This where to manipulate DOM (VanillaJS) or re-render in case of React
// Returns a method to unsubscribe from the store
// Having subscribed to unmounted component can cause memory leaks
const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

store.dispatch(bugAdd("Returns 404 error"));

console.log("ADDED: ", store.getState());

// Mark as resolved

store.dispatch(bugResolved(1));

console.log("RESOLVED: ", store.getState());

// Doesn't notify after removing the bug
unsubscribe();

store.dispatch(bugRemoved());

console.log("REMOVED: ", store.getState());
