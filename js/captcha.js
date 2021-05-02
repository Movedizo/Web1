function generarcaptcha() {
    let d1 = Math.floor((Math.random() * 4) + 1);
    console.log(d1);
    
    document.getElementById("captcha").src = "js/Imagescaptcha/" +  d1 + ".jpg"; 
    
    if(d1 == 1)
    pass = "Flushing Economy" ;
    if(d1 == 2)
    pass = "plumpho";
    if(d1 == 3)
    pass = "toads buttocks";
    if(d1 == 4)
        pass = "blinic" ;
}
generarcaptcha();

function validar(e) {
    let nodoInput = document.getElementById("contrasena");
    let passuser = nodoInput.value;
    console.log(passuser);
if (passuser == pass)
    alert("Usted es un humano");
else {
    e.preventDefault();
    alert("Robot detected");
    }
}
let btn = document.getElementById("btn-enviar");
btn.addEventListener("click", validar);