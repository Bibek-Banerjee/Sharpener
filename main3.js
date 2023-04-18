var form=document.getElementById("form");

form.addEventListener('submit',local);

function local(e){
    e.preventDefault();
    var em=document.getElementById("Email").value;
    var nm=document.getElementById("Name").value;
    var pn=document.getElementById("phno").value;

    var myobj={
        nme:nm,
        eml:em,
        pno:pn
    };
    var newobj=JSON.stringify(myobj);
    localStorage.setItem(em,newobj);
    var lst=document.getElementById("list");
    var li=document.createElement("li");
    var newItem=em+"-"+nm+'-'+pn;
    li.appendChild(document.createTextNode(newItem));
    lst.appendChild(li);
}