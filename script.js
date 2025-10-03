function tresImagenes() {
  document.getElementById("boton").innerHTML = "imágenes de alta calidad";
}

function pruebaOne() {
  el =
document.querySelector("#prueba2"); el.innerHTML = "imágenes";
}

function imagenAuto() {
const el =
  document.getElementsByTagName("li"); const p =
  document.querySelector("#id-5");
  p.innerText = el [2].innerHTML;
}
  
  function register() {
  const paragraph = document.querySelector("#message");
  const username = document.getElementById("usernameInput").value;
    paragraph.innerHTML = username + " : completo"; 
  }
