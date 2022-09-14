//PROTOTYPICAL Inheritance 10 - Exercise.

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
}


HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;


//baseHtmlSelectElement object which is empty object linked
// baseHtmlElement.

//HtmlSelectElement.prototype = Object.create(HtmlElement.prototype); -- baseHtmlElement 

const e = new HtmlElement();
console.log(e);

const s = new HtmlSelectElement();
console.log(s);




