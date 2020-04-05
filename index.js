//                 Клавиши для клавиатуры и HTML-контент

const keyboard_en = [
  { data: 192, value: "`"},
  { data: 49, value: "1" },
  { data: 50, value: "2" },
  { data: 51, value: "3" },
  { data: 52, value: "4" },
  { data: 53, value: "5" },
  { data: 54, value: "6" },
  { data: 55, value: "7" },
  { data: 56, value: "8" },
  { data: 57, value: "9" },
  { data: 48, value: "0" },
  { data: 189, value: "-" },
  { data: 187, value: "=" },
  { data: 8, value: "Backspace" },
  { data: 9, value: "Tab" },
  { data: 81, value: "q" },
  { data: 87, value: "w" },
  { data: 69, value: "e" },
  { data: 82, value: "r" },
  { data: 84, value: "t" },
  { data: 89, value: "y" },
  { data: 85, value: "u" },
  { data: 73, value: "i" },
  { data: 79, value: "o" },
  { data: 80, value: "p" },
  { data: 219, value: "[" },
  { data: 221, value: "]" },
  { data: 220, value: "  " },
  { data: 20, value: "CapsLK" },
  { data: 65, value: "a" },
  { data: 83, value: "s" },
  { data: 68, value: "d" },
  { data: 70, value: "f" },
  { data: 71, value: "g" },
  { data: 72, value: "h" },
  { data: 74, value: "j" },
  { data: 75, value: "k" },
  { data: 76, value: "l" },
  { data: 186, value: ";" },
  { data: 222, value: "'" },
  { data: 38, value: "🠕" },
  { data: 13, value: "Enter" },
  { data: 16, value: "Shift" },
  { data: 90, value: "z" },
  { data: 88, value: "x" },
  { data: 67, value: "c" },
  { data: 86, value: "v" },
  { data: 66, value: "b" },
  { data: 78, value: "n" },
  { data: 77, value: "m" },
  { data: 188, value: "," },
  { data: 190, value: "." },
  { data: 191, value: "/" },
  { data: 37, value: "🠔" },
  { data: 40, value: "🠗" },
  { data: 39, value: "🠖" },
  { data: 32, value: "Space" },
  { data: 17, value: "Ctrl" },
  { data: 18, value: "Alt" },
  { data: 91, value: "Win" }
];

const keyboard_ru = [
    { data: 192, value: "`"},
    { data: 49, value: "1" },
    { data: 50, value: "2" },
    { data: 51, value: "3" },
    { data: 52, value: "4" },
    { data: 53, value: "5" },
    { data: 54, value: "6" },
    { data: 55, value: "7" },
    { data: 56, value: "8" },
    { data: 57, value: "9" },
    { data: 48, value: "0" },
    { data: 189, value: "-" },
    { data: 187, value: "=" },
    { data: 8, value: "Backspace" },
    { data: 9, value: "Tab" },
    { data: 81, value: "й" },
    { data: 87, value: "ц" },
    { data: 69, value: "у" },
    { data: 82, value: "к" },
    { data: 84, value: "е" },
    { data: 89, value: "н" },
    { data: 85, value: "г" },
    { data: 73, value: "ш" },
    { data: 79, value: "щ" },
    { data: 80, value: "з" },
    { data: 219, value: "х" },
    { data: 221, value: "ъ" },
    { data: 220, value: "" },
    { data: 20, value: "CapsLK" },
    { data: 65, value: "ф" },
    { data: 83, value: "ы" },
    { data: 68, value: "в" },
    { data: 70, value: "а" },
    { data: 71, value: "п" },
    { data: 72, value: "р" },
    { data: 74, value: "о" },
    { data: 75, value: "л" },
    { data: 76, value: "д" },
    { data: 186, value: "ж" },
    { data: 222, value: "э" },
    { data: 38, value: "🠕" },
    { data: 13, value: "Enter" },
    { data: 16, value: "Shift" },
    { data: 90, value: "я" },
    { data: 88, value: "ч" },
    { data: 67, value: "с" },
    { data: 86, value: "м" },
    { data: 66, value: "и" },
    { data: 78, value: "т" },
    { data: 77, value: "ь" },
    { data: 188, value: "б" },
    { data: 190, value: "ю" },
    { data: 191, value: "." },
    { data: 37, value: "🠔" },
    { data: 40, value: "🠗" },
    { data: 39, value: "🠖" },
    { data: 32, value: "Space" },
    { data: 17, value: "Ctrl" },
    { data: 18, value: "Alt" },
    { data: 91, value: "Win" }
  ];

if(localStorage.getItem('lang') === null){
localStorage.setItem('lang', 'keyboard_en');
}
if (localStorage.getItem('CapsLK') === null) {
localStorage.setItem('CapsLK', 'false')
}

let keyboardFromLoc = localStorage.getItem('lang');
let CapsLK = localStorage.getItem('CapsLK');


let input = document.createElement("textarea");
input.className = "textarea";
input.setAttribute("value", "");
document.body.append(input);

let div = document.createElement("div");
div.className = "keyboard_inner no-active";
document.body.append(div);

let p = document.createElement("p");
p.className = "keyboard_subTitel";
document.body.append(p);
p.innerHTML = 'Клавиатура создана на Windows <br> Нажмите ALT для переключения языка'

if (keyboardFromLoc == "keyboard_en") {
keyboard = keyboard_en;
} else {
    keyboard =  keyboard_ru;
}

init(keyboard, CapsLK);


function init(keyboard, CapsLK) {
  let out = "";
  if (CapsLK === "true"){
    for (let i = 0; i < keyboard.length; i++) {
        out += `<div class="key" data="${keyboard[i].data}" value="${keyboard[i].value.toUpperCase()}"> ${keyboard[i].value.toUpperCase()} </div>`;
    }
  } 
  if (CapsLK === "false") {
        for(let i = 0; i < keyboard.length; i++) {
            out += `<div class="key" data="${keyboard[i].data}" value="${keyboard[i].value}"> ${keyboard[i].value} </div>`;   
        }
    }

  document.querySelector(".keyboard_inner").innerHTML = out;
}



const TEXTAREA = document.querySelector("textarea");

//   Нажатие на клавиатуру

document.onkeydown = function(event) {
  document
    .querySelector('.keyboard_inner .key[data="' + event.keyCode + '"]')
    .classList.add("-active");

  let code = document
    .querySelector('.keyboard_inner .key[data="' + event.keyCode + '"]')
    .getAttribute("value");

    if ( event.keyCode == 18 ){

    }
    else if (code == "Win") {
    event.preventDefault();
  } else if (event.keyCode == 32) {
    TEXTAREA.value += " ";
  } else if (event.keyCode == 20) {
        
      if (CapsLK == "false"){
        localStorage.setItem("CapsLK", "true" );
      } 
      if(CapsLK == "true"){
        localStorage.setItem("CapsLK", "false" )
    }

    window.location.reload();
  
    } else if (event.keyCode == 9) {
    //Tab

    event.preventDefault();
    TEXTAREA.value += "    ";
  } else if (
    //arow
    event.keyCode == 8 ||
    event.keyCode == 16 ||
    event.keyCode == 37 ||
    event.keyCode == 38 ||
    event.keyCode == 39 ||
    event.keyCode == 40 ||
    event.keyCode == 32
  ) {
    TEXTAREA.focus();
  } else if (event.keyCode == 13) {
    //Enter
    TEXTAREA.value += "\n";
  } else if (event.keyCode == 8) {
    // backspace

    TEXTAREA.value = TEXTAREA.value.substring(0, TEXTAREA.value.length - 1);
  } else if (
    code !== null &&
    event.keyCode !== 16 &&
    code !== "CapsLK" ||  code !==  "CAPSLK" &&
    code !== "Tab" ||  code !==  "TAB" &&
    code !== "Alt" ||  code !==  "ALT" &&
    code !== "Ctrl" ||  code !==  "CTRL" &&
    code !== "Win" ||  code !==  "WIN"
  ) {
    document.querySelector("textarea").value += code;
  }
};

document.onkeyup = function removeActive(event) {
  document
    .querySelector('.keyboard_inner .key[data="' + event.keyCode + '"]')
    .classList.remove("-active");

    if ( event.keyCode == 18 ){
        if (keyboardFromLoc == "keyboard_en") {
            localStorage.setItem("lang", "keyboard_ru");

        } else {
            localStorage.setItem("lang", "keyboard_en");

        }
        if (keyboardFromLoc == "keyboard_en") {
            keyboard = keyboard_en;
            } else {
                keyboard_ru;
            }
            window.location.reload();
    }

};

//    Нажатие мышкой

document.querySelector(".keyboard_inner").onmousedown = function(event) {
  let out = "";
  event.target.classList.add("-active");
  let code = event.target.getAttribute("value");

  if (code == "Alt" || code == "ALT") {
    if (keyboardFromLoc == "keyboard_en") {
        localStorage.setItem("lang", "keyboard_ru");

    } else {
        localStorage.setItem("lang", "keyboard_en");

    }
    if (keyboardFromLoc == "keyboard_en") {
        keyboard = keyboard_en;
        } else {
            keyboard_ru;
        }
        window.location.reload();
  } else if (code == "Space" || code == "SPASE") {
    TEXTAREA.value += " ";
  } else if (code == "CapsLK" || code == "CAPSLK") {
    //CapsLK
    document
      .querySelector('.keyboard_inner .key[data="20"]')
      .classList.toggle("CapsLK");

      if (CapsLK == "false"){
        localStorage.setItem("CapsLK", "true" );
      } 
      if(CapsLK == "true"){
        localStorage.setItem("CapsLK", "false" )
    }
    window.location.reload();

  } else if (code == "Tab" || code == "TAB") {
    TEXTAREA.value += "    ";
  } else if (code == "Enter" || code == "ENTER") {
    //Enter
    TEXTAREA.value += "\n";
  } else if (code == "Backspace" || code == "BACKSPACE") {
    // backspace
    TEXTAREA.value = TEXTAREA.value.substring(0, TEXTAREA.value.length - 1);
  } else if (
    code !== null &&
    code !== "Shift" &&  code !==  "SHIFT" &&
    code !== "CapsLK" &&  code !==  "CAPSLK" &&
    code !== "Tab" &&  code !==  "TAB" &&
    code !== "Alt" &&  code !==  "ALT" &&
    code !== "Ctrl" &&  code !==  "CTRL" &&
    code !== "Win" &&  code !==  "WIN" &&
    code !== "Space" &&  code !== "SPACE"
  ) {
    TEXTAREA.value += code;
  }
};

document.querySelector(".keyboard_inner").onmouseup = function(event) {
  event.target.classList.remove("-active");
};
