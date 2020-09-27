const link = document.querySelector("a");
link.textContent = "ProgMentor";
//link.innerHTML = "<h1>ProgMentor</h1>";
link.href = "https://programmingmentor.com.ua";

const sect = document.querySelector("section");
const para = document.createElement("p");
sect.appendChild(para);
para.innerText = "New Paragraf";
para.classList.add("selected"); //задав чорнй стиль

const text = document.createTextNode(
  " — the premier source for web development knowledge."
); //створить текстовий вузел
const linkPara = document.querySelector("p"); //знайде перший параграф і після </а> вставить текстовий вузел
linkPara.appendChild(text);

const cloneLinkPara = linkPara.cloneNode(true);
sect.appendChild(cloneLinkPara);
sect.removeChild(linkPara);

// for (let i = 1; i <= 100; i++) {
//   const newPar = document.createElement("p");
//   newPar.innerText = i;
//   sect.appendChild(newPar);
// }

const btn = document.querySelector(".click-me");
btn.addEventListener("click", buttonCliked);
function buttonCliked() {
  const newPar = document.createElement("p");
  newPar.innerText = "hello";
  sect.appendChild(newPar);
}

// JQuery
//$('.click-me').click(buttonClicked);
// let clockTimerId;
// function buttonClicked() {
//     if (!clockTimerId) {
//         function updateClock() {
//             const clockContainer = document.querySelector('.clock');
//             clockContainer.innerText = (new Date()).toLocaleTimeString();
//         }
//         clockTimerId = setInterval(updateClock, 1000);
//     } else {
//         clearInterval(clockTimerId);
//         clockTimerId = null;
//     }
// }

//calculator
const display = document.querySelector('.display');

const digitButtons = document.querySelectorAll('.digits button');
digitButtons.forEach( button => button.addEventListener('click', digitClicked) );

function digitClicked(ev) {
   display.value += ev.target.innerText;
}

const operButtons = document.querySelectorAll('.opers button');
operButtons.forEach( button => button.addEventListener('click', operClicked) );

function operClicked(ev) {
   display.value += ev.target.innerText;
}

const equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
    display.value = eval(display.value);
});
