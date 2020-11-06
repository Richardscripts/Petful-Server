const Queue = require("../queue/Queue");
const store = require("../../store");

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue(),
};

store.cats.forEach((cat) => pets.cats.enqueue(cat));
store.dogs.forEach((dog) => pets.dogs.enqueue(dog));

// --------------------

module.exports = {
  get(type) {
    if (!type) {
      return pets;
    }
    console.log(pets[type]);
    return pets[type];
  },

  dequeue(type) {
    if (type === "cats") {
      // console.log(pets.cats);
      pets.cats.dequeue();
      // console.log(pets.cats);
    } else if (type === "dogs") {
      pets.dogs.dequeue();
    }
  },
};
