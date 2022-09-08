
// Functions  11 - Changing This.

// const video = {
//   title: 'a',
//   tags: ['c', 'd', 'e'],
//   showTags() {
//     this.tags.forEach(function(tag) {
//       console.log(this.title , tag);
//     }.bind(this));                  // bind method
//   }
// };
// video.showTags();


const video = {
  title: 'a',
  tags: ['c', 'd', 'e'],
  showTags() {
    this.tags.forEach(tag => {      // arrow function method inherits this from the containing function
      console.log(this.title , tag);
    });                   
  }
};
video.showTags();
















// another approach to change this.

// function playVideo() {
//   console.log(this);
// }

// playVideo.call({ name: 'Mosh' }, 1, 2);  // diff withapply method
// playVideo.apply({ name: 'Mosh' }, [1, 2]); // diff with call method
// playVideo.bind({ name: 'Mosh' }) ();  // returns a new function and sets THIS to always point to this object permanently.



// playVideo();
