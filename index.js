

$(document).ready(function(){

  var contador = 0;
   $( "#slider-value" ).html( contador );
   $( "#slider-value2" ).html( contador );
    $( "#slider" ).slider({
      value:contador,
      min: 0,
      max: 100,
      step: 1,
      slide: function( event, ui ) {
          $( "#slider-value" ).html( ui.value );
          $( "#slider-value2" ).html( ui.value );
       
          contador = ui.value;
      }
});
  


  var myVar = setInterval(myTimer, 1000);

  function myTimer() {

    if(contador < 100){
    contador = contador + 1 ; 
   
    $( "#slider-value" ).html(contador );
    $( "#slider-value2" ).html( contador );
    $(".progress-bar").css("width", contador + "%").text(contador );
    $( "#slider" ).slider("value",contador);
  
  }else{
    contador = 0;
  }
  }

  $( "#reset" ).click(function() {
    contador = -1;
  });


  });


