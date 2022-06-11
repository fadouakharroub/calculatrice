const showOperation = document.querySelector('#showOperation');
const showLastNumber = document.querySelector('#showLastNumber');
let result = null;
let operation;
let firstNumber;
let secendNumber;


function getOperation(op) {
    if (firstNumber) {
        getResult();
     }
        operation = op;
        if (showOperation.textContent) {
            firstNumber= Number(showOperation.textContent); 
            }
        showLastNumber.textContent = showOperation.textContent += operation; 
        showOperation.textContent = null;    
}

function getNumber(number) {
    showOperation.textContent += number;   
}


function getResult() {
    if (firstNumber) {

    secendNumber = Number(showOperation.textContent);

    switch(operation) {
		case '+':
            result = firstNumber + secendNumber;
		break;

		case '-':
            result = firstNumber - secendNumber;
		break;

		case '*':
            result = firstNumber * secendNumber;
		break;

		case '/':
            if ( secendNumber == 0) {
                alert('You can\'t divide by Zero. Try again after 2000 year.');
                reset() ;
            }else result = firstNumber / secendNumber;
		break;   
	}

operation = null;
showLastNumber.textContent= null;
return showOperation.textContent = result;
}
   
}
function dot() {
	let dotCheck = showOperation.textContent;
	if (!dotCheck.includes('.')) {
		showOperation.textContent += '.';
	}
}
function reset() {
    showOperation.textContent= null;
    showLastNumber.textContent= null;
    operation = null;
    secendNumber= null;
    firstNumber= null;
}

function back() {
    if (showOperation.textContent != '') {
        secendNumber= null;  
		let back = showOperation.textContent;
		showOperation.textContent = back.substring(0, back.length - 1);
	}else{ 
        firstNumber= null;
        let back = showLastNumber.textContent;
        showLastNumber.textContent = back.substring(0, back.length - 1);}
}

window.addEventListener('keydown', (click) =>{
    if (click.key >= 0 && click.key <= 9)  getNumber(click.key)
    if (click.key === '.') dot()
    if (click.key === '=' || click.key === 'Enter') getResult()
    if (click.key === 'Backspace') back()
    if (click.key === 'Escape') reset()
    if (click.key === '+' || click.key === '-' || click.key === '*' || click.key === '/')
    getOperation(click.key)
  })

