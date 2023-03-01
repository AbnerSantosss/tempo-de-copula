
const form = document.querySelector('form')
const primeiroTempo = document.querySelector('#tempoInicial')
const segundoTempo = document.querySelector('#tempoFinal')
const button = document.querySelector('.btn')

//==============Display===============//
const display = document.querySelector('.printTimer')


form.onsubmit = function (event) {
    event.preventDefault() //removendo o padrão do formulário, para não recarregar a página ao clicae no  submit//
}

 function tempoGasto  (horario1, horario2) {
    
    // quebrando os horários em hora, minuto e segundo
    let [h1, m1, s1] = horario1.split(':');
    let [h2, m2, s2] = horario2.split(':');
    
    // convertendo as strings em números
    h1 = parseInt(h1);
    m1 = parseInt(m1);
    s1 = parseInt(s1);
    h2 = parseInt(h2);
    m2 = parseInt(m2);
    s2 = parseInt(s2);
    
    // calculando a diferença em segundos
    let segundos1 = h1 * 3600 + m1 * 60 + s1;
    let segundos2 = h2 * 3600 + m2 * 60 + s2;
    let diferencaSegundos = Math.abs(segundos2 - segundos1);
    
    // convertendo a diferença de volta para hora:minuto:segundo
    let horas = Math.floor(diferencaSegundos / 3600);
    let minutos = Math.floor((diferencaSegundos % 3600) / 60);
    let segundos = diferencaSegundos % 60;
    let messageCopula 
    
    // formatando a hora de saída com 2 dígitos
    horas = ('0' + horas).slice(-2);
    minutos = ('0' + minutos).slice(-2);
    segundos = ('0' + segundos).slice(-2);

    if(horas >= 1 || minutos >= 20){
        messageCopula = "Houve cópula"

    } else{
        messageCopula = "Não Houve cópula"
    }

    if(horas == 00){
        return `O tempo gasto foi de ${minutos} Minutos e  ${messageCopula}`;
    }if (horas == 1){
        return `O tempo gasto foi de ${horas} hora e ${minutos} minutos e ${messageCopula}`;
    }if(minutos == 0 && horas == 1){
         return `O tempo gasto foi ${horas} hora e ${messageCopula}`;
    }else{
        return `O tempo gasto foi ${horas} horas e ${minutos} minutos e ${messageCopula}`;
    }

    
  }


      button.addEventListener('click' , function (){
      
          const tInicial = primeiroTempo.value +":00"
          const tFinal = segundoTempo.value + ":00"
      
          const message = `O Tempo inicial foi`

          let result = tempoGasto(tInicial,tFinal)
          
          display.innerText = result
          
      } )
        

       
      
          
         
  
   
   


    
    
    













