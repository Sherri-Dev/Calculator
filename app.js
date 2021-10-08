// Calculation Algorithm
buttons = document.querySelectorAll('td')

// Get Number
var scr1Data = document.querySelector('.scr1');
var scr2Data = document.querySelector('.scr2');
var scr3Data = document.querySelector('.scr3');
const numbersData = document.querySelectorAll('.number');
let scr1Num = ""
let scr2Num = "";

haveDot = false;
numbersData.forEach(number => {
    number.addEventListener('click', (e) => {
        if (e.target.innerText == "." && !haveDot) {
            haveDot = true;
        } else if (e.target.innerText == "." && haveDot) {
            return;
        }
        scr2Num += e.target.innerText;
        scr2Data.innerText = scr2Num;
        console.log(scr2Num);
    })
});

// Operations
const oprsData = document.querySelectorAll('.opr');
oprsData.forEach((opr) => {
    opr.addEventListener("click", (e) => {
        if (!scr2Num) return;
        haveDot = false;
        var oprName = e.target.innerText;
        if (scr1Num && scr2Num && lastOpr) {
            mathOperation();
        } else {
            result = parseFloat(scr2Num);
        }
        clearVar(oprName);
        lastOpr = oprName;
        console.log(result);
    });
});

function clearVar(name = "") {
    scr1Num += scr2Num + " " + name + " ";
    scr1Data.innerText = scr1Num;
    scr2Data.innerText = "";
    scr2Num = "";
    scr3Data.innerText = result;
}

function mathOperation() {
    if (lastOpr === "x") {
        result = parseFloat(result) * parseFloat(scr2Num);
    } else if (lastOpr === "+") {
        result = parseFloat(result) + parseFloat(scr2Num);
    } else if (lastOpr === "-") {
        result = parseFloat(result) - parseFloat(scr2Num);
    } else if (lastOpr === "/") {
        result = parseFloat(result) / parseFloat(scr2Num);
    } else if (lastOpr === "%") {
        result = parseFloat(result) % parseFloat(scr2Num);
    }
}

// Equal
equalData = document.querySelector('.equal');
equalData.addEventListener("click", () => {
    if (!scr1Num || !scr2Num) return;
    haveDot = false;
    mathOperation();
    clearVar();
    scr2Data.innerText = result;
    scr3Data.innerText = ''
    scr2Num = result
    scr1Num = '';
})

// Clear
let clear = document.getElementById('clear')
clear.onclick = function AC() {
    scr2Data.innerText = '0';
    scr1Data.innerText = '0';
    scr3Data.innerText = '0';
    scr1Num = '';
    scr2Num = '';
    result = '';
}

//  Backspace
let del = document.getElementById('del');
del.addEventListener('click', () => {
    if (scr2Data.innerText == '') {
        scr1Num = scr1Num.slice(0, scr1Num.length - 1)
        scr1Data.innerText = scr1Num
    } else {
        scr2Num = scr2Num.slice(0, scr2Num.length - 1)
        scr2Data.innerText = scr2Num;
    }
})


// Trignometric Functions
let trigno = document.getElementsByClassName('trigno');
console.log(trigno)
trigno[0].onclick = function trsin() {
    scr2Data.innerText = Math.sin(scr2Num);
    pushVar(scr2Data.innerText);
    scr2Data.innerText = result;
    scr3Data.innerText = ''
    scr2Num = result
    scr1Num = '';
}
trigno[1].onclick = function trasin() {
    scr2Data.innerText = Math.asin(scr2Num);
    pushVar(scr2Data.innerText);
    scr2Data.innerText = result;
    scr3Data.innerText = ''
    scr2Num = result
    scr1Num = '';
}
trigno[2].onclick = function tracos() {
    scr2Data.innerText = Math.acos(scr2Num);
    pushVar(scr2Data.innerText);
    scr2Data.innerText = result;
    scr3Data.innerText = ''
    scr2Num = result
    scr1Num = '';
}
trigno[3].onclick = function tratan() {
    scr2Data.innerText = Math.atan(scr2Num);
    pushVar(scr2Data.innerText);
    scr2Data.innerText = result;
    scr3Data.innerText = ''
    scr2Num = result
    scr1Num = '';
}
trigno[4].onclick = function trcos() {
    scr2Data.innerText = Math.cos(scr2Num);
    pushVar(scr2Data.innerText);
    scr2Data.innerText = result;
    scr3Data.innerText = ''
    scr2Num = result
    scr1Num = '';
}
trigno[5].onclick = function trtan() {
    scr2Data.innerText = Math.cos(scr2Num);
    pushVar(scr2Data.innerText);
    scr2Data.innerText = result;
    scr3Data.innerText = ''
    scr2Num = result
    scr1Num = '';
}

function pushVar(name = "") {
    scr1Num += name + " ";
    scr1Data.innerText = scr1Num;
    result = scr2Data.innerText;
    scr3Data.innerText = result;
    scr2Num = "";
}

// Square, Cube and Square-root
let square = document.getElementById('square');
square.onclick = function square() {
    scr2Data.innerText = scr2Num * 2;
    pushVar(scr2Data.innerText);
    scr2Data.innerText = result;
    scr3Data.innerText = ''
    scr2Num = result
    scr1Num = '';
}

let cube = document.getElementById('cube');
cube.onclick = function cube() {
    scr2Data.innerText = scr2Num * 3;
    pushVar(scr2Data.innerText);
    scr2Data.innerText = result;
    scr3Data.innerText = ''
    scr2Num = result
    scr1Num = '';
}

let sqrt = document.getElementById('sqrt');
sqrt.onclick = function sqrt() {
    scr2Data.innerText = Math.sqrt(scr2Num);
    pushVar(scr2Data.innerText);
    scr2Data.innerText = result;
    scr3Data.innerText = ''
    scr2Num = result
    scr1Num = '';
}

// log and ln
let log = document.querySelectorAll('.log');
log[0].onclick = function log() {
    scr2Data.innerText = Math.log10(scr2Num);
    pushVar(scr2Data.innerText);
    scr2Data.innerText = result;
    scr3Data.innerText = ''
    scr2Num = result
    scr1Num = '';
}
log[1].onclick = function nlog() {
    scr2Data.innerText = Math.log(scr2Num);
    pushVar(scr2Data.innerText);
    scr2Data.innerText = result;
    scr3Data.innerText = ''
    scr2Num = result
    scr1Num = '';
}

// Keyboard Handling

window.addEventListener("keydown", (e) => {
    if (e.key == "1" ||
        e.key == "2" ||
        e.key == "3" ||
        e.key == "5" ||
        e.key == "6" ||
        e.key == "7" ||
        e.key == "8" ||
        e.key == "9" ||
        e.key == "0") {
        clickButton(e.key);
    } else if (e.key == "+" ||
        e.key == "-" ||
        e.key == "/") {
        clickOpr(e.key);
    } else if (e.key == "*") {
        clickOpr("x");
    } else if (e.key == "Backspace") {
        clickBackSpace(e.key);
        console.log(e.key)
    } else if (e.key == "=" || "Enter") {
        clickEqual(e.key);
    }

});

function clickButton(key) {
    numbersData.forEach((button) => {
        if (button.innerText === key) {
            button.click();
        }
    });
}

function clickOpr(key) {
    oprsData.forEach((opr) => {
        if (opr.innerText == key) {
            opr.click();
        }
    });
}

function clickBackSpace() {
    del.click();
}

function clickEqual() {
    equalData.click();
}

// Dark Mode
let dark = document.getElementById('dark');
let icon = document.getElementById('night')
let toggle = document.getElementById('toggle');
toggle.onclick = function darkMode() {
    toggle.classList.toggle('active');
    dark.classList.toggle('active');
    icon.classList.toggle('active')
}