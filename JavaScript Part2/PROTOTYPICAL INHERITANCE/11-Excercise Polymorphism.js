//PROTOTYPICAL Inheritance 11 - Exercise Polymorphism

// HTMLElement  (parent)

// HTMLSelectElement (dropdown list)


function HtmlElement()  {
  this.click = function() {
    console.log('clicked');
};
}

HtmlElement.prototype.focus = function() {
console.log('focused');
}



function HtmlSelectElement(items = []) {
this.items = items;

this.addItem = function(item) {
  this.items.push(item);
}

this.removeItem = function(item) {
  this.items.splice(this.items.indexOf(item), 1);
}

 this.render = function() {
   return `
   <select>${this.items.map(item =>`
      <option>${item}</option>`).join('')}
   </select>`;
 }
}

function HtmlImageElement(src) {
this.src = src;
this.render = function() {
  return `<img src='${this.src}'>`
}
}

const elements = [
new HtmlSelectElement([1, 2, 3]),
new HtmlImageElement('http://')
];

for (let element of elements) {
  element.render();
}


HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

//baseHtmlSelectElement object which is empty object linked
// baseHtmlElement.

//HtmlSelectElement.prototype = Object.create(HtmlElement.prototype); -- baseHtmlElement 

//const e = new HtmlElement();
//console.log(e);

//const s = new HtmlSelectElement();
//console.log(s);




