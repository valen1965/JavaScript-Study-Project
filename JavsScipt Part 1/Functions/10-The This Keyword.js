// Functions - 10 - The this Keyword.  

// This -- The object that is excecuting the current function

// if a function is part of an object => method
// if a function is a method in an object - 'this' references that object.


const video = {
  title: 'a',
  play() {
    console.log(this);
  }
};

video.stop = function() {
  console.log(this);
}


video.play();
video.stop();

// if that function is the regular function, which means is not part of an object - 'this' references global object ( window object in browsers)

const audio = {
  title: 'a',
  play() {
    console.log(this);
  }
};

function playAudio() {
  console.log(this);
}

playAudio();

// constructor function

function Audio(title) {
  this.title = title;
  console.log(this);
}

const v = new Audio('aaa'); // new operator creates new empty object {} and sets 'this' constructor function to point to new empty object.

// another example

const player = {
  title: 'alpha',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(function(tag) {
      console.log(this.title, tag);
  }, this);
 } 
};

player.showTags();

