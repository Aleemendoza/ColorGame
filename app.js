var cuadrados = document.getElementsByClassName("square");

var pickedColor = document.getElementById("colorDisplay");

var colors = ["rgb(240, 14, 128)","rgb(180, 76, 122)","rgb(255, 89, 00)",
"rgb(23, 43, 34)", "rgb(34, 54, 98)", "rgb(43, 156, 128)"]

pickedColor.textContent= pickedColor
pickedColor.innerHTML=colors[4]




function changeColors (color){
    
    for( i = 0 ;i < colors.length ; i++) {
        
        cuadrados[i].style.backgroundColor=color    
        
    }    
    
    // funcion para comparar el color clickeado con el del elemento del dom.
    
}

function elegirCuadrados() {
    for (i = 0; i<colors.length;i++){
        
        
        cuadrados[i].addEventListener("click",function(){
            var colorClickeado = this.style.backgroundColor;
            
            if (colorClickeado != pickedColor.innerHTML){
                
                this.style.background="gray";
                var message = document.getElementById("message");
                message.innerHTML="try again!";
           }
            else {  
                var message = document.getElementById("message");
                var h1 = document.querySelector("h1");
                message.innerHTML="Correct!";
                h1.style.backgroundColor=colorClickeado;
                changeColors(pickedColor);
            }
        })   
            cuadrados[i].style.backgroundColor=colors[i];
    }  
    return;
} 
elegirCuadrados();


//  función para asignarle a pickedColor un color random

function pickColor() {


    var numeroRamdom = Math.floor( Math.random() * colors.length );
    return colors[numeroRamdom];
}

function generarNumeroRamdom (num){

    var numGenerado = [];
    for (i = 0; i < num; i++){
        numGenerado[i] = colorRamdom();
    }
    return generarNumeroRamdom;

}
pickColor();
generarNumeroRamdom(colors)
