// Functions - 11 - Changing this.  

// const video = {
//   title: 'alpha',
//   tags: ['a', 'b', 'c'],
//   showTags() {
//     const self = this;
//     this.tags.forEach(function(tag) {
//       console.log(self.title, tag); // not a prefreed approach using 'self' ot 'that' properties.
//   });
//  } 
// };

// video.showTags();



// // another prefered approach

// function playVideo(a, b) {
//   console.log(this);
// }

// playVideo.call({name: 'Mosh'}, 1 , 2);
// playVideo.apply({name: 'Mosh'}, [1, 2]); // what we pass as an argument i.e. "({'Mosh'}) " will be used in place of 'this'. 
// const fn = playVideo.bind({name: 'Hamedani'}, [3, 4]);

// fn();

// playVideo();

// solution with bind method;

const video = {
  title: 'alpha',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(function(tag) {
    console.log(this.title, tag); 
  }.bind(this));
 } 
};

//video.showTags();

// newer solution starting with ECMAScript
// is arrow functions. And good thing with arrow function is that its inherits 'this' value from a containing function.

const audio = {
  title: 'alpha',
  tags: ['d', 'e', 'f'],
  showTags() {
    this.tags.forEach(tag => console.log(this.title, tag))
  } 
};

audio.showTags();