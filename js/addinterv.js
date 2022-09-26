document.getElementById("agregar").addEventListener("click", agregar);
    const element = ([]);
    
    // i=0;
    //const interv=[];
    function agregar(){
      
      var start = document.getElementById("inferior").value;
      var end = document.getElementById("superior").value;
      
      var fila = ' [' + start + ',' + end + ']'; //esto seria lo que contendria la fila
   
      var tabla= document.getElementById("interv");
      tabla.append(fila);
      
      const interv = ([start,end]);
      element.push(interv);

    }

document.getElementById("ordenar").addEventListener("click", sumIntervalos);
    
function sumIntervalos() {

        //primero ordenamos los intervalos con el metodo burbuja
        for(i=0;i<(element.length-1);i++){
        
             for(j=0;j<(element.length-i);j++){
                
                 if(element[j]>element[j+1]){
                     
                     aux=element[j];
                   
                     element[j]=element[j+1];
                
                     element[j+1]=aux;
         
                }
            }
        }
        

        //sumamos los intervalos sin sumar lo superpuesto

        const ranges = new Set();
        var aux = 1;
        element.forEach(([start, end]) => {
            
            //si el primer numero del intervalo es mayor que el último del intervalo anterior
            // recorrer y contar desde el primer numero del intervalo actual
            if (start > aux) {
                 
                for (let i = start; i < parseInt(end); i++){
                    ranges.add(i);
                }              
                         
            }
            //si el primer numero del intervalo no es mayor que el último del intervalo anterior (superposicion)
            // recorrer y contar desde el ultimo numero del intervalo anterior
            else {

                for (let i = aux; i < parseInt(end); i++){
                    ranges.add(i);
                } 
            }
            aux=end;
            
        });

        document.getElementById("result").innerHTML = "La suma  es " + ranges.size;

        
   
}
    