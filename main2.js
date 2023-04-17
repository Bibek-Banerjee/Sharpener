
var form=document.getElementById("my-form");

form.addEventListener('submit',toLocal);

function toLocal(e){
    e.preventDefault();
    var nm=document.getElementById("name").value;
    var mail=document.getElementById("email").value;
    localStorage.setItem("Name",nm);
    localStorage.setItem("email",mail);
}