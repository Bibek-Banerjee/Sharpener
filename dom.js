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

// GetelementByClassName
var lst=document.getElementsByClassName("title");
console.log(lst);
lst[0].style.color="green";
lst[0].style.fontWeight="bolder";
lst[1].style.fontWeight="bolder";
lst[1].style.color="blue";
var lst2=document.getElementsByClassName("list-group-item");
console.log(lst2);
lst2[2].style.background="green";
lst2[2].style.fontWeight="bolder";
lst2[4].style.fontWeight="bolder";
//using getelementbytagname
var l=document.getElementsByTagName("li");
console.log(l);
l[4].style.background="aqua";
//using query-selector
var lists=document.querySelector(".list-group-item:nth-child(2)");
console.log(lists);
lists.style.backgroundColor="Green";
var thirdlist=document.querySelector(".list-group-item:nth-child(3)");
thirdlist.style.display="none";