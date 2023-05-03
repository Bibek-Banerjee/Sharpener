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
    var myobj={
        nme:nm,
        eml:em,
        pno:pn
    };
    var newobj=JSON.stringify(myobj);
    localStorage.setItem(em,newobj);
    var lst=document.getElementById("list");
    var li=document.createElement("li");
    li.className=em;
    var newItem=em+"-"+nm+'-'+pn;
    li.appendChild(document.createTextNode(newItem));
    del.addEventListener("click",delt);
    li.appendChild(del);
    // console.log(del);
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