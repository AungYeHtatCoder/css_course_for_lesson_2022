// examine the document object
//1 console.dir(document);

//console.log(document.URL);
//console.log(document.title);
//console.log(document.docType);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textContent = 'Hello';

//console.log(document.forms);

//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');

// 2
//var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// override the textContent property
//headerTitle.textContent = 'Goodbye';

//console.log(headerTitle.textContent);
//console.log(headerTitle.innerText);
//headerTitle.innerText = '<h3>Hello</h3>';

//headerTitle.style.borderButtom = 'solid 3px #000';
//2
//header.style.borderBottom = 'solid 3px #000';
//3 GET ELEMENT BY CLASS NAME
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.backgroundColor = 'yellow';
// items[1].style.fontWeight = 'bold';

// given the error
//items.style.backgroundColor = 'yellow';

//for (var i = 0; i < items.length; i++) {
//items[i].style.backgroundColor = '#f4f4f4'; // for each item in the array, set the background color to #gray color
//}
// 4 GET ELEMENT BY TAG NAME
// var li = document.getElementsByTagName('li');
// console.log(li);
// li[1].textContent = 'Hello 2';
// li[1].style.backgroundColor = 'yellow';
// li[1].style.fontWeight = 'bold';

// for (var i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// 5 QUERY SELECTOR
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #000';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'blue';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.color = 'green';

// var lastitem = document.querySelector('.list-group-item:last-child');
// lastitem.style.color = 'blue';

// 6 QUERY SELECTOR ALL
var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = 'green';
  even[i].style.backgroundColor = 'yellow';
}
// extral exercise
// console.log(document.all.length);
//console.log(document.links);
// console.log(document.links[0]);
//console.log(document.images);
// console.log(document.images[0]);
// console.log(document.scripts);
// console.log(document.scripts[2].getAttribute("src"));
// console.log(document.scripts[2].getAttribute("type"));
// console.log(document.scripts[2].getAttribute("charset"));
// console.log(document.scripts[2].getAttribute("defer"));
// console.log(document.scripts[2].getAttribute("async"));
// console.log(document.scripts[2].getAttribute("language"));
// console.log(document.scripts[2].getAttribute("src"));
// console.log(document.scripts[2].getAttribute("type"));
// console.log(document.scripts[2].getAttribute("charset"));
// console.log(document.scripts[2].getAttribute("defer"));
