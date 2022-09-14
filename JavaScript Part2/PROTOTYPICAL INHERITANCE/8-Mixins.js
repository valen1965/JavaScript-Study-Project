//PROTOTYPICAL Inheritance 8 - Mixins.

function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}


const canEat = {
  eat: function() {
    this.hunger--;
    console.log('eating');
  }  
};

const canWalk = {
  walk: function() {
    console.log('walking');
  }
};

const canSwim = {
  swim: function() {
    console.log('swimming');
  }
};
// Compose these object together to create person whon can eat and walk.
// const person = Object.assign({}, canEat, canWalk);
// console.log(person);

function Person() {
    
}

// then, instead of empty object as first argument we will put person.proto... as a target object.
mixin(Person.prototype, canEat, canWalk);

const person = new Person();
console.log(person);

function GoldFish() {
}

mixin(GoldFish.prototype, canEat, canSwim);

const goldfish = new GoldFish();
console.log(goldfish);
