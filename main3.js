var form=document.getElementById("form");

form.addEventListener('submit',local);

function local(e){
    e.preventDefault();
    var em=document.getElementById("Email").value;
    var nm=document.getElementById("Name").value;
    var pn=document.getElementById("phno").value;
    var del=document.createElement("button");
    del.id=em;
    del.innerHTML="delete";
    var edit=document.createElement("button");
    edit.className=em;
    edit.innerHTML="edit";
    var myobj={
        nme:nm,
        eml:em,
        pno:pn
    };
    var newobj=JSON.stringify(myobj);
    localStorage.setItem(em,newobj);
    var lst=document.getElementById("list");
    var li=document.createElement("li");
    // li.className=em;
    var newItem=em+"-"+nm+'-'+pn;
    li.appendChild(document.createTextNode(newItem));
    del.addEventListener("click",delt);
    edit.addEventListener("click",edt);
    li.appendChild(del);
    li.appendChild(edit);
    lst.appendChild(li);
}
function delt(e){
    var iden=this.id;
    var lis=document.getElementById("list");
    // var rem=document.getElementsByClassName("iden");
    localStorage.removeItem(iden);
    console.log(e.target.parentElement);
    lis.removeChild(e.target.parentElement);
}
function edt(e){
    var ide=this.className;
    var ls=document.getElementById("list");
    // console.log(e.target);
    document.getElementById("Name").value=JSON.parse(localStorage.getItem(ide)).nme;
    document.getElementById("Email").value=JSON.parse(localStorage.getItem(ide)).eml;
    document.getElementById("phno").value=JSON.parse(localStorage.getItem(ide)).pno;
    localStorage.removeItem(ide);
    ls.removeChild(e.target.parentElement);
    }