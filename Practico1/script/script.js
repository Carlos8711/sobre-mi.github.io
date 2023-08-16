
var numero="";
let aux=0;
let display=document.getElementById('dis');
let botonOI=document.getElementById('ON');
let i=0;
let s=0;
let r=0;
let d=0;
let m=0;
let re=0;
let b=0;
let suma=0;
let resta=0;
let divi=0;
let multi=0;
let resid=0;
let sumid=0;
let mulid=0;
let diid=0;
let onid=0;
let encen=false;
let resultado=0;


/*********************************FUNCION ENCENDER*************************/
/**Esta funcion enciende  la calculadora mostrando un boton off cuando esta prendida
 * y un bonton on cuando esta apagada, tambien inicializa todas las variables una vez apagada
 */

function encender(on){
 onid=on;
if(onid=="ON" && encen==false){
    encen=true;
    display.innerHTML="0";
    botonOI.innerHTML="OFF";
}
else{
    encen=false;
    i=0;
    re=0;
    b=0;
    s=0;
    r=0;
    m=0;
    d=0;
    suma=0;
    resta=0;
    multi=0;
    divi=0;
    sumid=0;
    resid=0;
    mulid=0;
    diid=0;
    resultado=0;
    numero="";
    aux=0;
    display.innerHTML="";
    botonOI.innerHTML="ON";
}
    

}


/*********************************FUNCION OBTENER DATOS*************************/
/*obtengo los datos atravez del id y los voy sumando y mostrando en el display, tambien fijo un cierta cantidad de numero
que puedo mostras en el display que es 10*/
function obtener(id){
    
    if(encen){
        i++  ;
        numero=numero+id;
        aux=id;
        if(numero.length<10){
            display.innerHTML=numero;
            console.log(numero);
        }else{

        }
     

    }


}



/*********************************FUNCION SUMAR*************************/
/*tranforma las cadenas de numero a un float y lo suma a un resultado final , luego inicialida de nuevo la variable para 
poder mostras un nuevo numero por el display, muestra el resultado de la suma , en el caso de que sea un numero muy grande 
muestra su notacion cientifica */

function sumar(sum){
  
sumid=sum;
    s++;
   if (numero=="" ){
    
   }
   else{
    suma=parseFloat(numero,10);
    resultado=resultado+suma;
    numero=""; 
    
    strd=resultado.toString(); 


    if(strd.length>10){
           
        display.innerHTML=resultado.toPrecision(3);
    }
   else{
    
    display.innerHTML=resultado;
    numero=""; 

   } 





   }

}
/*********************************FUNCION RESTAR*************************/
/*tranforma las cadenas de numero a un float y lo suma a un resultado final , luego inicialida de nuevo la variable para 
poder mostras un nuevo numero por el display, muestra el resultado de la resta , en el caso de que sea un numero muy largo  
muestra su notacion cientifica */
function restar(res){
    resid=res;
    re++;
    if (numero=="" ){
    }
    else{
     resta=parseFloat(numero,10);

     if(resultado==0 && r==0){
      resultado=resta;
      numero=""; 
     }
     else{ 

        resultado=resultado-resta;
        numero=""; 
        strd=resultado.toString(); 
        
        if(strd.length>10){
                   
            display.innerHTML=resultado.toPrecision(3);
        }
       else{
        
        display.innerHTML=resultado;
        numero=""; 

       } 

     }
  
    }


}
/*********************************FUNCION MULTIPLICAR*************************/
/*tranforma las cadenas de numero a un float y lo suma a un resultado final , luego inicialida de nuevo la variable para 
poder mostras un nuevo numero por el display, muestra el resultado de la multiplicacion , en el caso de que sea un numero muy grande 
muestra su notacion cientifica,
si no hay nada en la variable que suman los caracteres para mostrase en pantalla entonces le asigo el nuevo numero ingresado para
que no siempre muestra un cero */

function multiplicar(mul){
  
    mulid=mul;
        m++;
       if (numero=="" ){
     
    
       }
       else{
        multi=parseFloat(numero,10);
        if(resultado==0){
            resultado=multi;

              numero=""; 
        }else{
            resultado=resultado*multi;
            numero="";  
            strd=resultado.toString(); 


            if(strd.length>10){
                   
                display.innerHTML=resultado.toPrecision(3);
            }
           else{
            
            display.innerHTML=resultado;
            numero=""; 

           } 

        }
        
       }
    
    }



/*********************************FUNCION DIVIDIR*************************/
/*tranforma las cadenas de numero a un float y lo suma a un resultado final , luego inicialida de nuevo la variable para 
poder mostras un nuevo numero por el display, muestra el resultado de la divicion , en el caso de que sea un numero muy grande 
muestra su notacion cientifica, tambien valido y muestro un error en el caso de que se queiera dividir por cero */

    function dividir(div){
        let strd=""
        diid=div;
            d++;
           if (numero=="" ){
         
           }
           else{
            divi=parseFloat(numero,10);
            if(resultado==0){
                resultado=divi;
                numero=""; 
              
    
            }else{
               if(divi==0){
                numero=""; 
                resultado=0;
                display.innerHTML="ERROR"
               }else{
                
                resultado=resultado/divi;
                strd=resultado.toString();

                if(strd.length>10){
                   
                    display.innerHTML=resultado.toPrecision(3);
                   
                }
               else{
                
                display.innerHTML=resultado;
                numero=""; 

               } 


               }
            
    
            }
           
             
           }
        
        }
    


/*********************************FUNCION RESOLVER*************************/
/* de acuerdo a que boton toque es la funcion que va a resolver, mismo llama a esa funcion cuando precionamos el igual */

function resolver(){
 
    r++;

    if(resid=="-"){

      

        if (re>0){

            restar();
            re=0;
            r=0;
                if(b>0){
                     display.innerHTML=resultado.toPrecision(3);
                      }
    
                }
                else {
                     numero="";
          
                    }
    }
   

        if(sumid=="+"){
       
      
    
            if (s>0){
                sumar();
                s=0;
                r=0;
                if(b>0){
                    display.innerHTML=resultado.toPrecision(3);
                }
        
            }
            else {
                numero=""
              
            }
        
        }

        if(mulid=="x"){
       
               if (m>0){
                   multiplicar();
                   m=0;
                   r=0;
                   if(b>0){
                       display.innerHTML=resultado.toPrecision(3);
                   }
           
               }
               else {
                   numero="";
                 
               }
           
           }


        if(diid=="/"){
           
               if (d>0){
                   dividir();
                   d=0;
                   r=0;
                   if(b>0){
                       display.innerHTML=resultado.toPrecision(3);
                   }
           
               }
               else {
                   numero="";
                 
               }
           
           }
       
 r=0;

}



/*********************************FUNCION CANCELAR*************************/
/*borra todo los datos ingresados y vuelve las variables a su primera instancia para realizar una nueva operacion */
function cancelar(){
    if(encen){
        i=0;
        re=0;
        b=0;
        s=0;
        r=0;
        m=0;
        d=0;
        suma=0;
        resta=0;
        multi=0;
        divi=0;
        sumid=0;
        resid=0;
        mulid=0;
        diid=0;
        resultado=0;
        numero="";
        aux=0;
        display.innerHTML="0"

    }


}


/*********************************FUNCION CANCELAR ULTIMO INGRESADO*************************/

/*calcela el ultimo numero ingresado para poder volver a poner uno nuevo  */
function cancelaru(){

    if(encen){
        numero="";
        display.innerHTML="0";

    
    }
 
}





/*********************************FUNCION BORRAR CARACTERES*************************/

/*eliminas los caracteres que se van sumando y mostrando por el dispay  */


function borrarc(){

    var str =numero;

    if(r>0){

        }else{

            if(i>0){     
                
                str=str.substring(0,str.length -1)
                numero=str;

                if(str.length==0 ){
    
                    display.innerHTML=resultado.toPrecision(3);
                
                b++;
               
                }else{
                display.innerHTML=numero;

                }
  
            }
        }
        
}














