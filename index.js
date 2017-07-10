// index.js
let res = 0;
let pend = '0';
let hold = null;
let oper = null;

function updateValues() {
	document.getElementById('result').innerText = String(res);
	document.getElementById('pending').innerText = String(pend);
	document.getElementById('holding').innerText = String(hold);
	document.getElementById('op').innerText = String(oper);
}

updateValues();

for (let i = 0; i <= 9; i++) {
	document.getElementById('num-' + i).onclick = function() {
		pend = pend + this.innerText;
		updateValues();
	};
}

document.getElementById('op-dot').onclick = function() {
	pend = pend + this.innerText;
	updateValues();
};

document.getElementById('op-plus').onclick = function() {
	hold = Number(pend);
	pend = '0';
	oper = '+';
	updateValues();
};

document.getElementById('op-minus').onclick = function() {
	hold = Number(pend);
	pend = '0';
	oper = '-';
	updateValues();
};

document.getElementById('op-times').onclick = function() {
	hold = Number(pend);
	pend = '0';
	oper = '*';
	updateValues();
};

document.getElementById('op-divide').onclick = function() {
	hold = Number(pend);
	pend = '0';
	oper = '/';
	updateValues();
};

document.getElementById('op-eq').onclick = function() {
	pend = Number(pend);
	if (hold === null || oper === null) return;
	else if (oper === '+') res = pend + hold;
	else if (oper === '-') res = pend - hold;
	else if (oper === '*') res = pend * hold;
	else if (oper === '/') res = pend / hold;
	pend = String(res);
	hold = null;
	oper = null;
	updateValues();
};
