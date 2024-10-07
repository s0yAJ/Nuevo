function Advertir(){
    let Nombre = document.getElementById("Numero").value;
    if(Nombre >= 18 ){
        alert("Usted tiene acceso a todos nuestros servicios");
    }else{
        alert("Usted tiene accesos a servicios limitados");
    }
}