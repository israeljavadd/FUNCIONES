
function Sueldo(){
    var Dulces=null;
    var Vendidos=null;
    Dulces =document.getElementById("idCUANTOS DULCES VAS A VENDER HOY?").value;
    Vendidos= document.getElementById("idA QUE PRECIO?").value;
    var Dulcesvendidos=Dulces*Vendidos;
    alert("Los dulces vendidos son: "+Dulcesvendidos+" dulces vendidos al dia,si esto continua aumentara a "+(Dulcesvendidos*3)+" en estos dias!");
    }




