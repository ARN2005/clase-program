function encender(){
    document.getElementById("image").src="pngegg.png";
}
function apagar(){
    document.getElementById("image").src="pngegg (1).png"
}

function cambiaverde(){
    document.getElementById("fond").style.backgroundColor="Green"
    document.getElementById("vid").style.backgroundColor="Green"
    
}
function cambiagris(){
    document.getElementById("vid").style.backgroundColor="darkslategray"
    
}
function normal(){
    document.getElementById("fond").style.backgroundColor="White"
    document.getElementById("vid").style.backgroundColor="White"
    
}

function agregar(){
    var lista=document.getElementById("lista");
    var dato=document.getElementById("dato").value;
    var li = document.createElement("li");
    li.textContent=dato;
    lista.appendChild(li);

}
function eliminar(){
    var lista=document.getElementById("lista");
    lista.removeChild(lista.lastElementChild);
}
window.sr=ScrollReveal();
sr.reveal(".hola", {
    duration: 6000,
    origin:"right",
    distance: "100px"

});
 window.sr=ScrollReveal();
sr.reveal("#image", {
    duration: 6000,
    origin:"right",
    distance: "100px"

});
