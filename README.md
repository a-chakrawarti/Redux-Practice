# What is Redux?

Redux is a state management library for JavaScript apps.

Can be used with: React, Angular, Vue and even with Vanilla JS.

## State management solutions

- Flux: (by Facebook in 2014), is a architecture pattern.
- Redux: Popular due to simplicity and elegance.
- MobX: Popular library.

## Why Redux?

All application state in a single an JavaScript object "store". Redux manages a single source of truth. Database for front-end.

- Centralizes application's state.
- Makes data flow transparent and predictable.

## Functions

- Functions are first class objects in JavaScript.

- Higher order function: A function which takes a function as an argument. Eg: map array function, setTimeout etc.

- Composition: Break a task into multiple small functions as it becomes easier to test. Passing a function inside another is called composition. Needs to be read from right to left and becomes an issue with all the paranthesis.

- Lodash: A powerful utility library for JavaScript.

### Currying:

```javascript
const add = (a) => (b) => a + b;

// currying
add(5)(6);
```

### Pure Functions

```javascript
// When provide same argument, result should be same.
(arg) => result;

// Not a Pure function

function value(arg) {
  return arg * math.random();
}
```

- We cannot use random values
- No current date/time
- Cannot read or change global state (DOM, files, db, etc)
- We cannot mutate our parameters

- We have to make sure that the `reducers` are pure functions. Other function in our application can be impure.

---

Benefits of Pure functions:

- Self Documenting: Whatever value it requires must be passed as parameter
- Easily testable
- Concurrency: Can be ran in parallel
- Cacheable

### Immutability

Once created, cannot be changed!
PROS:

- Predictability
- Faster Change Detection
- Concurrency
  CONS:
- Performance
- Memory Overhead: Copying objects, libaries are there to reduce the impact (structural sharing)

### Enforcing immutability

Since JavaScript is a not a fully-functiona prograaming language, to enforce immutability we use following libraries:

- ImmutableJS: Developed by Facebook, has issues, provides immutable data structures
- Immer: Developed by creator of MobX, trendy
- Mori: Popular

## Redux Architecture

3 building blocks of redux application.

- Store: Single JS object that includes our application state.
- Actions(Event): Which are plain javascript object that represents what just happened.
- Reducer(Event Handler): One or more reducer, each responsible for updating a slice of the store. They are "Pure Functions". They get the current store instance and return the updated one.

- Action (dispatch) -> Store -> Reducer (updated) - - -> Store
- Helps in logging action and see how state changes. Also helps in undoing actions.
