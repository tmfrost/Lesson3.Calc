function getNumber(num) {
	var input_var1 = document.getElementById('input');
	switch(num){
		case 1:
		input_var1.value +='1';
		break;

		case 2:
		input_var1.value +='2';
		break;

		case 3:
		input_var1.value +='3';
		break;

		case 4:
		input_var1.value +='4';
		break;

		case 5:
		input_var1.value +='5';
		break;

		case 6:
		input_var1.value +='6';
		break;

		case 7:
		input_var1.value +='7';
		break;

		case 8:
		input_var1.value +='8';
		break;

		case 9:
		input_var1.value +='9';
		break;

		case 0:
		input_var1.value +='0';
		break;
	}
}

function getOperand(operand) {
	var input_var2 = document.getElementById('input')
	switch(operand){
		case '+':
		input_var2.value += '+';
		break;

		case '-':
		input_var2.value += '-';
		break;

		case '*':
		input_var2.value += '*';
		break;

		case '/':
		input_var2.value += '/';
		break;

	}
}



function clearScreen() {
	document.getElementById('input').value ="";
	document.getElementById('answer').value ="";
}

function compute() {
	var input_var3= document.getElementById('input');
	ans = Math.floor(+eval(input_var3.value));
	document.getElementById('answer').value = '=' + ans;
  //archive=String(input_var)+ "" + case + " " + String(second)+"="+String(ravno)="n<hr/>";
	//document.getElementById('hist').innerHTML +=archive;
}

function  zxc() {
	var operation = [];
	operation
}

