//Voy a comenzar creando un elemento que se encargue de guardar los valores predeterminados de los procesos
vectValT=[128,256,512];
//este es el maximo de la memoria
maximoMemoria=1024
//para los procesos que se van a simular
//se va a agregar un acumulador para indicar si la memoria ram, se llena.
acum=0
colores=["blue","yellow","green","red","pink"]
procesos=[
    {
        "numerop":"p1",
        "tamanio": vectValT[0]
    },
    {
        "numerop":"p2",
        "tamanio": vectValT[2]
    },
    {
        "numerop":"p3",
        "tamanio": vectValT[2]
    },
    {
        "numerop":"p4",
        "tamanio": vectValT[2]
    },
    {
        "numerop":"p5",
        "tamanio": vectValT[1]
    }
]
//VARIABLES QUE VAN A SER NECESARIAS PARA SU USO: 
bloque1P=document.getElementById("procesoEnviar");
tam=procesos.length;
cont=0
memoria1=document.getElementsByClassName("segmento1")
console.log(memoria1)
acumuladorMem1=0
//FUNCION PARA LLENAR LA MEMORIA
const funcionDememoria1=function(proc,el){
    cnt2=0
    while(cnt2<el){
        if(acumuladorMem1==0){
            idel=document.getElementById("proceso"+1)
            idel.style.setProperty("background",proc)
            idel.classList.toggle("noocupado")
          //  console.log(idel)
        }else{
            numerp=1+cnt2+acumuladorMem1
            //console.log(numerp)
            if(numerp<=8){   
                idel=document.getElementById("proceso"+numerp)
                idel.style.setProperty("background-color",proc)  
                idel.classList.toggle("noocupado")
            }else{
                numerp2=cnt2+acumuladorMem1-8+1;
                console.log(numerp2)
         document.getElementById("procesoV"+numerp2).style.setProperty("background",proc)
            }
        }
        
        cnt2++;
    }
    acumuladorMem1=acumuladorMem1+el;
}
const liberarMemoria=function(){
    
}
cont=0
id=function(elem){
    elem.style.setProperty("background-color",colores[cont])
    if(cont==procesos.length){
        cont=0
    }
    cont++
    return colores[cont-1]
    
} 
contador=0
$valor=document.getElementById("inic-but");
$valor.addEventListener("click",()=>{
    intervalor=setInterval(()=>{
        div=0
        div=(procesos[contador].tamanio)/128
        procesos[contador].color=id(bloque1P)
        funcionDememoria1(procesos[contador].color,div)
        acum=acum+div
        contador++
        if(contador==tam){
            contador=0
            clearInterval(intervalor);
        }
        
    },1000)   
})

