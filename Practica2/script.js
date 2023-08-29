const selectionplayerlittle=document.createElement('img');
const selectioncpulittle=document.createElement('img');
const resetna=document.createElement('input');
let entername=document.getElementById('conteiner-enter-name');
let startgame=document.getElementById('conteiner-game');
let scoreplayer=document.getElementById('score-player');
let scorecpu=document.getElementById('score-cpu');
let name_player=document.getElementById('name-player'); 
let name_cpu=document.getElementById('name-cpu');
let versus=document.getElementById('vs');
let resetx3=document.getElementById('duel-x3');
let resetx5=document.getElementById('duel-x5');
let resetname=document.querySelector('#reset-name');
let resetnameh2=document.querySelector('#reset-name-h2');
let resetpoint=document.getElementById('reset-point');
let selectionplayer=document.querySelector('#selection-player')
let selectioncpu=document.querySelector('#selection-cpu')

let select_cpu;
let select_user;
let disp=""
let vuelta=0;
let p=0;
let c=0;
let g=0;
let c3=0;
let c5=0;
const game=["rock","paper","scissors"]

scoreplayer.innerHTML=0
scorecpu.innerHTML=0
name_cpu.innerText="CPU"
versus.innerText="CHOOSE THE NUMBER OF DUELS"
entername.style.display="hidden"
startgame.style.display="none"


// Ingresa el nombre del usuario e inicia el juego mostrando la pantalla del juego //
function entergame(){

  var capturename=document.getElementById('nameu').value;
  if(capturename.length<7 && capturename.length!=0){
    name_player.innerHTML=capturename
    startgame.setAttribute('style', 'display: hidden');
    entername.setAttribute('style', 'display: none');
  }else{
    
  }
  
  
}

// captura la desicion del usuairo y la desicion de la cpu y pasa por parametro los resultados//

function selectuser(selected){
    select_user=selected;
    select_cpu=selectcpu();
    result(select_user, select_cpu);


}

// la cpu elige de manera aleatoria con que opcion de las 3 jugar  //
function selectcpu(){
    let random = Math.random();
        random = random * 3 ;
        random = Math.trunc(random);        
        select_cpu = game[random];
         return select_cpu;
}



// resuleve quien gana de acuerdo a que eligio el usuario y la maquina   //


function result(user ,cpu ){


  if(g!=vuelta){


 selectionplayerlittle.setAttribute('style', ' display:hidden');
 selectioncpulittle.setAttribute('style', ' display:hidden');

          selectionplayer.appendChild(selectionplayerlittle)
          selectioncpu.appendChild(selectioncpulittle)
          selectionplayerlittle.style.width="250px";
          selectionplayerlittle.style.height="250px";
          selectioncpulittle.style.width="250px";
          selectioncpulittle.style.height="250px";
            
            
            if(user==cpu){

              if(user=="rock"){
                console.log(user)
                console.log(cpu)
              
                selectionplayerlittle.src='./rock2.png';
                selectioncpulittle.src='./rock2.png';
                versus.innerText="TIE"



                  } else if(user=="paper"){
                    selectionplayerlittle.src='./paper2.png';
                    selectioncpulittle.src='./paper2.png';
                    versus.innerText="TIE"

                    }else{
                      selectionplayerlittle.src='./scissors2.png';
                      selectioncpulittle.src='./scissors2.png';
                      versus.innerText="TIE"

                    }
              


            }else{
              g++;
            

             versus.innerText="VS"
        
              if(user=="rock" && cpu=="scissors" ){

              selectionplayerlittle.src='./rock2.png';
              selectioncpulittle.src='./scissors2.png';
          
              
              p++;
            



              }else if(user=="paper" && cpu=="rock"){


                selectionplayerlittle.src='./paper2.png';
                selectioncpulittle.src='./rock2.png';

              
                p++;



                }else if(user=="scissors" && cpu=="paper"){
                
                  selectionplayerlittle.src='./scissors2.png';
                  selectioncpulittle.src='./paper2.png';
                
                
                  p++;



                  }else if(cpu=="rock" && user=="scissors" ){
                    selectioncpulittle.src='./rock2.png';
                    selectionplayerlittle.src='./scissors2.png';

                  
                    c++;
                    

                    }else if(cpu=="paper" && user=="rock"){
                      selectioncpulittle.src='./paper2.png';
                      selectionplayerlittle.src='./rock2.png';
                    

                      c++;

                        }else if(cpu=="scissors" && user=="paper"){

                          selectioncpulittle.src='./scissors2.png';
                          selectionplayerlittle.src='./paper2.png';
                          c++;


                              }else{
                                

                              }
     }

            scoreplayer.innerHTML=p
            scorecpu.innerHTML=c
          
  }




  if(g==vuelta){
    
   if(p>c){
      versus.innerText="YOU SURVIVED"
      
  
    }else if(c>p){
      versus.innerText="YOU DIED"
      
    }else{}


  }
}



// Resetea los campos de puntos //
function resetp(){
  scoreplayer.innerHTML=0
  scorecpu.innerHTML=0
  versus.innerText="CHOOSE THE NUMBER OF DUELS"
 p=0;
 c=0;
 g=0;
 vuelta=0;
 resetx3.setAttribute('style', '   background-color:  #666464;');
 resetx5.setAttribute('style', ' background-color:  #666464;');
 
 selectionplayerlittle.setAttribute('style', ' display:none');
 selectioncpulittle.setAttribute('style', ' display:none');

}


 
//  Reingresa el nombre del usuario//

function resetn(){

  startgame.setAttribute('style', 'display: none');
  entername.setAttribute('style', 'display: hidden');
  resetx3.setAttribute('style', '   background-color:  #666464;');
  resetx5.setAttribute('style', ' background-color:  #666464;');
  selectionplayerlittle.setAttribute('style', ' display:none');
  selectioncpulittle.setAttribute('style', ' display:none');
  
  scoreplayer.innerHTML=0
  scorecpu.innerHTML=0
  versus.innerText="CHOOSE THE NUMBER OF DUELS"
  vuelta=0
  p=0;
  c=0;
  g=0


}
// Selecciona la cantidad de duelos por 3 y resetea algunos capos como el de puntos   //
function duelx3(){
  vuelta=3
  p=0;
  c=0;
  g=0
  scoreplayer.innerHTML=0
  scorecpu.innerHTML=0

    resetx3.setAttribute('style', ' background-color: rgba(10, 75, 5, 0.973)');
    resetx5.setAttribute('style', ' background-color:  #666464;');
    selectionplayerlittle.setAttribute('style', ' display:none');
    selectioncpulittle.setAttribute('style', ' display:none');
    versus.innerText="DUEL TO THE DEATH IN 3 TURN "
  
  }


// Selecciona la cantidad de duelos por 5 y resetea algunos capos como el de puntos   //

function duelx5(){
 vuelta=5
 p=0;
 c=0;
 g=0;
   scoreplayer.innerHTML=0
  scorecpu.innerHTML=0
 
    resetx5.setAttribute('style', ' background-color: rgba(10, 75, 5, 0.973)');
    resetx3.setAttribute('style', '  background-color:  #666464;');
    selectionplayerlittle.setAttribute('style', ' display:none');
    selectioncpulittle.setAttribute('style', ' display:none');
    versus.innerText="DUEL TO THE DEATH IN 5 TURN "
   
 
}
