alert(" Bienvenido a nuestro sistema de turnos online");


let opcion=parseInt(prompt("Ingrese el numero correspondiente a su consulta: 1 - turnos , presione otro numero o letra para salir"));

while(opcion== 1){
 
   //ingreso y validacion de datos del usuario
   

   //validarnombre
    function validarNombre() {
        let nombre=prompt("ingrese su nombre").toLowerCase();
    
        if(nombre.trim() === "" || !isNaN(nombre)){
            alert("No se ingreso el nombre");
            validarNombre();
        } 
        else{
            return nombre;
        }
    }
    
    let nombre=validarNombre();
 
    
  
    // validar apellido
    
    function validarApellido() {
        let apellido=prompt("ingrese su apellido").toLowerCase();
    
        if(apellido.trim() === "" || !isNaN(apellido)){
            alert("No se ingreso su apellido");
            validarApellido();
        } else{
            return apellido;
            
        }
    }
    
    let apellido=validarApellido();



    
    // eleccion del profesional y muestra de dias/ horarios disponibles


    alert("Hola!"+  nombre +" "+ apellido+ "."+" Los profesionales disponibles para esta semana son: Gonzalo , Milo");
        
    let profesional=prompt( "seleccione por cual profesional quiere ser atendido");
    
        
    if (profesional.toLowerCase()=="gonzalo") {


            // eleccion dia disponible
            let dia=prompt("elija el dia de la semana que prefiere: lunes/martes/viernes");
            // eleccion horario disponible
            if (dia.toLowerCase()=="lunes") {
        
                let horario=parseInt(prompt("elija el horario disponible: 1- 10hs , 2- 13hs , 3- 16hs"));
        
                switch (horario) {
                    case 1:
                        horario=10;
                        
                        break;
                    case 2:
                        horario=13;
                       
                        break;
        
                    case 3:
                        horario=16;
                       
                        break;       
                
                    default:
        
                        alert(" el resto de los horarios estan ocupados")
        
        
                        break;
                }
                alert("Gracias por su reserva"+ " "+ nombre+"."+ " El turno es el dia "+" "+ dia +" en el horario"+" "+ horario+"hs."+" Muchas gracias ROMA_BARBERIA !!")   ;            
            } 
             else if (dia.toLowerCase()=="martes") {
        
                let horario=parseInt(prompt("elija el horario disponible: 1- 9hs , 2- 15hs , 3- 18hs"));
                switch (horario) {
                    case 1:
                        horario=9;
                        
                        break;
                    case 2:
                        horario=15;
                       
                        break;
        
                    case 3:
                        horario=18;
                        
                        break;       
                
                    default:
        
                        alert(" el resto de los horarios estan ocupados")
        
        
                        break;
                }
        
                
        
                alert("Gracias por su reserva"+ " "+ nombre+"."+ " El turno es el dia "+" "+ dia +" en el horario"+" "+ horario+"hs."+" Muchas gracias ROMA_BARBERIA !!")   ;  
                
               }else if (dia.toLowerCase()=="viernes") {
        
                let horario=parseInt(prompt("elija el horario disponible: 1- 11hs , 2- 19hs "));
                switch (horario) {
                    case 1:
                        horario=9;
                        console.log(horario);
                        break;
                    case 2:
                        horario=15;
                        console.log(horario);
                        break;
           
                
                    default:
        
                        alert(" el resto de los horarios estan ocupados")
        
        
                        break;
                }
                alert("Gracias por su reserva"+ " "+ nombre+"."+ " El turno es el dia "+" "+ dia +" en el horario"+" "+ horario+"hs."+" Muchas gracias ROMA_BARBERIA !!")   ;  
                
               }
               else{
                alert("Los dias disponibles son los mencionados anteriormente. La agenda volvera a abrir en una semana , te esperamos :) ")
               } 

               // cuando se elige profesional : milo.
             } else if (profesional.toLowerCase()=="milo"){
                
               // eleccion del dia disponible
                let dia=prompt("elija el dia de la semana que prefiere: miercoles/jueves");
               // eleccion del horario disponible
                if (dia.toLowerCase()=="miercoles") {
            
                    let horario=parseInt(prompt("elija el horario disponible: 1- 10hs , 2- 13hs , 3- 16hs"));
            
                    switch (horario) {
                        case 1:
                            horario=10;
                            console.log(horario);
                            break;
                        case 2:
                            horario=13;
                            console.log(horario);
                            break;
            
                        case 3:
                            horario=16;
                            console.log(horario);
                            break;       
                    
                        default:
            
                            alert(" el resto de los horarios estan ocupados")
            
            
                            break;
                    }
                    alert("Gracias por su reserva"+ " "+ nombre+"."+ " El turno es el dia "+" "+ dia +" en el horario"+" "+ horario+"hs."+" Muchas gracias ROMA_BARBERIA !!")   ;  
                } 
                 else if (dia.toLowerCase()=="jueves") {
            
                    let horario=parseInt(prompt("elija el horario disponible: 1- 9hs , 2- 15hs , 3- 18hs"));
                    switch (horario) {
                        case 1:
                            horario=9;
                            console.log(horario);
                            break;
                        case 2:
                            horario=15;
                            console.log(horario);
                            break;
            
                        case 3:
                            horario=18;
                            console.log(horario);
                            break;       
                    
                        default:
            
                            alert(" el resto de los horarios estan ocupados")
            
            
                            break;
                    }
                    alert("Gracias por su reserva"+ " "+ nombre+"."+ " El turno es el dia "+" "+ dia +" en el horario"+" "+ horario+"hs."+" Muchas gracias ROMA_BARBERIA !!")   ;  
            
                    
            
                 
                    
                   }else{
                    alert("Los dias disponibles son los mencionados anteriormente. La agenda volvera a abrir en una semana , te esperamos :) ")
                   }
        
                
               } else {
                alert("nombre del profesional ingresado es incorrecto o inexistente");
                
               }





}

alert("gracias por su visita!");






 


    















    

        
    
    


    













