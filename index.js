
// 18 - Excercise 4 - Blog Post Object.

// let post = {
//   title: 'alfa',
//   body: 'body',
//   author: 'human',
//   views: 10,
//   comments: [
//     { author: 'A', body: 'B'},
//     { author: 'B', body: 'C'},
//   ],
//   isLive: true
// };

function Post(title, body, author)  {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

let post = new Post ('TITLE', 'BODY', 'AUTHOR');
console.log(post);

// let post = {
//   title: 'alfa',
//   body: 'body',
//   author: 'human',
//   views: 0,
//   comments: [],
//   isLive: false
// };

// console.log(post);
