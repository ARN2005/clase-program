function encender(){
    document.getElementById("image").src="img/pngegg.png";
}
function apagar(){
    document.getElementById("image").src="img/pngegg (1).png"
}

function cambiaverde(){
    document.getElementById("fond").style.backgroundColor="Green"
    
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