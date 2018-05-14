/*
 * Implement all your JavaScript in this file!
 */
var display_num ='';

function clickHandler() {
  var display = $('#display');

  var digit_entered = this.id[6];
  
  var input_digit = String(digit_entered);
  display_num = display_num + input_digit;
  display.val(display_num);

  
}

$(':button').click(clickHandler);

/*
$('#button1').click(clickHandler);
$('#button2').click(clickHandler);
$('#button3').click(clickHandler);
$('#button4').click(clickHandler);
$('#button5').click(clickHandler);
$('#button6').click(clickHandler);
$('#button7').click(clickHandler);
$('#button8').click(clickHandler);
$('#button9').click(clickHandler);
$('#button0').click(clickHandler);
*/