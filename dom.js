//examining the document Object
// console.dir(document);

console.log(document.title)
console.log(document.URL);
document.title=1234;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document);
document.getElementById("header-title").innerText="Hello";
console.log(document.forms);
console.log(document.links);
console.log(document.images);
//getelementbyid
var headr=document.getElementById("header-title");
headr.style.borderBottom="3px solid black";

//GetelementByClassName
var lst=document.getElementsByClassName("title");
console.log(lst);
lst[0].style.color="green";
lst[0].style.fontWeight="bold";