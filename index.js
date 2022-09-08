
// Functions  10 - This Keyword.

// THIS referencing the OBJECT that is executing the current function. 

// if a function is part of an object - we call it method -> obj.
// if a function is not part of an object - it is global functions / function -> global ( which is window in browser and global in node.js)

const video = {
  title: 'a',
  tags: ['c', 'd', 'e'],
  showTags() {
    this.tags.forEach(function(tag) {
      console.log(this.title , tag);
    }, this ); 
  }
};

video.showTags();


// video.stop = function() {
//   console.log(this);
// };   

// function Video(title) {
//   this.title = title;
//   console.log(this);
// }

// const v = new Video('b');
// // video.stop();

// //playVideo();