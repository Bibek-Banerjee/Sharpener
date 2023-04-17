
var form=document.getElementById("my-form");

form.addEventListener('submit',toLocal);

function toLocal(e){
    e.preventDefault();
    var myObj={
        nm:document.getElementById("name").value,
        mail:document.getElementById("email").value
    };
    var obj=JSON.stringify(myObj);
    // console.log(obj);
    localStorage.setItem("myobj",obj);
    // localStorage.setItem("email",mail);
}