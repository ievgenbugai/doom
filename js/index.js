const link = document.querySelector('a');
link.textContent = 'ProgMentor';
//link.innerHTML = "<h1>ProgMentor</h1>";
link.href = "https://programmingmentor.com.ua"

const sect = document.querySelector("section");
const para = document.createElement("p");
sect.appendChild(para);
para.innerText = 'New Paragraf';

const text = document.createTextNode(" — the premier source for web development knowledge.");//створить текстовий вузел
const linkPara = document.querySelector("p");//знайде перший параграф і після </а> вставить текстовий вузел
linkPara.appendChild(text);