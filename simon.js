$(document).ready(function() {
  
  var tones = [
  new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'), 
  new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
  new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'), 
  new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
  ]; 
   
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
       $('#strict-light').toggleClass('strict-on');
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

function strictOff(){
  $('#strict-light').removeClass('strict-on');
  $('#strict-light').addClass('strict-off');
}