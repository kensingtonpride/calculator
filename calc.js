/* calc.js
 * Implement all your JavaScript in this file!
 */
//var displayField = $("input[name='display']");
var display = '';
var oper = '';
var num1 = '';
var num2 = '';
var result = false;
var second = false;
var prev_result = '';
var prev_button = '';
var action = '';
function clickHandler(e) {
    if (result) { 
       display= '';
       result = false;
       prev_result = '';
    }
    if (second) { 
        display= '';
        second = false;
     }
    button = e.currentTarget.id;
    digit = button.charAt(button.length-1);
    display = display + digit;
    console.log(digit);
    $('#display').val(display);
};

function operHandler(e) {
    button = e.currentTarget.id;
    
    action = button.charAt(0);


    console.log('operHandler');
    console.log(oper);
    
    if (action==='e' || oper!=='') 
    if (oper==''||second)
    {
        console.log('do nothing and ignore the = click');
        }
    else
    {
        console.log('resultHandler');
        num2 = Number(display);
        if (oper ==='+') {display = num1 + num2};
        if (oper ==='-') {display = num1 - num2};
        if (oper ==='*') {display = num1 * num2};
        if (oper ==='/') {display = num1 / num2};
        console.log(oper);
        $('#display').val(display);
        prev_result = display;
        //num1 = display;
        display = '';
        if (action==='e'){
            console.log('debug3');
            console.log(prev_result);
            second = false;
            //num1 = '';
            //num2 = '';
            oper = '';
        }
        else 
        // here we handle the case of two consecutive arithmetic operator buttons clicked - the 2nd one supersedes the 1st
         {
          result = false;
            console.log('debug');
            console.log(display);
            console.log(prev_result);
            console.log(num1);
            console.log(second);
            console.log(action);
            if (action==='a') {oper ='+'}
            else if (action==='s') {oper ='-'}
            else if (action==='m') {oper ='*'}
            ;
            if (second){
            console.log('second');
            display = oper;
            $('#display').val(display);
            };
            console.log(oper);
            ;
        };

        result = true;
    }
    else {
    if (action==='a') {oper ='+'}
    else if (action==='s') {oper ='-'}
    else if (action==='m') {oper ='*'}
    else if (action==='d') {oper ='/'}
    console.log('operHandler2');
    console.log(oper);
    if (prev_result==='') {num1 = Number(display)}
    else {num1 = prev_result};
    console.log('debug2');
    console.log(num1);
    console.log(prev_result);
    display = oper;
    $('#display').val(display);
    result = false;
    second = true;
    }
}

function addHandler() {
    num1 = Number(display);
    oper = '+';
    display = '+';
    second = true;
    console.log(oper);
    $('#display').val(display);
};

function subtractHandler() {
    num1 = Number(display);
    oper = '-';
    display = '-';
    second = true;
    console.log(oper);
    $('#display').val(display);
};

function multiplyHandler() {
    num1 = Number(display);
    oper = '*';
    display = '*';
    second = true;
    console.log(oper);
    $('#display').val(display);
};

function divideHandler() {
    num1 = Number(display);
    oper = '/';
    display = '/';
    second = true;
    console.log(oper);
    $('#display').val(display);
};

function resultHandler() {
    console.log('resultHandler');
    result = true;
    num2 = Number(display);
    if (oper ==='+') {display = num1 + num2};
    if (oper ==='-') {display = num1 - num2};
    if (oper ==='*') {display = num1 * num2};
    if (oper ==='/') {display = num1 / num2};
    console.log(oper);
    $('#display').val(display);
};

function clearHandler() {
    num1 = 0;
    num2 = 0;
    oper = '';
    display = '';
    prev_result = '';
    $('#display').val(display);
};

$('#button0').click(clickHandler);
$('#button1').click(clickHandler);
$('#button2').click(clickHandler);
$('#button3').click(clickHandler);
$('#button4').click(clickHandler);
$('#button5').click(clickHandler);
$('#button6').click(clickHandler);
$('#button7').click(clickHandler);
$('#button8').click(clickHandler);
$('#button9').click(clickHandler);

$('#addButton').click(operHandler);
$('#subtractButton').click(operHandler);
$('#multiplyButton').click(operHandler);
$('#divideButton').click(operHandler);
$('#equalsButton').click(operHandler);

$('#clearButton').click(clearHandler);
