$(document).ready(function() {
   
$('.switch input').on('change', function(){
 if($(this).is(':checked')){
   turnOn();
 }else{
   turnOff();
   strictOff();
 }
});
   
$('#strict').click(function(){
  if($('.switch input').is(':checked')){
      strictOn();
    }else{
      strictOff();
   }
 });

});
 
 function turnOn() {
    $('#screen').text('00');
    $('#screen').css('color', 'red');
  }
 
function turnOff() {
    $('#screen').text('--');
    $('#screen').css('color', '#990000');
  }

function strictOn(){
  $('#strict-on').css('background-color', 'red');
}

function strictOff(){
  $('#strict-on').css('background-color', '#888');
}