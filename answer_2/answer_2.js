let placeholder = new ParagraphChanger(document.getElementById("change"));
// window.onload = new ParagraphChanger(document.getElementById("change"));
window.onload = placeholder.bold;

class ParagraphChanger {
    constructor(paragraph) {
        this.paragraph = paragraph;
        for (let i = 0; i < 4; i++) {
            document.createElement("button");
            document.getElementsByTagName("Button")[i].addEventListener('click', (i) => {
                switch (i) {
                    case 0: this.bold(); console.log("Hello World"); break;
                    case 1: // function; break;
                    case 2: // function; break;
                    case 3: // function; break;
                }
            });
        }
    };
    bold() {
        let foo = this.paragraph;
        if (foo.style.fontWeight === "bold") {
            foo.style.fontWeight = "normal";
        } else {
            foo.style.fontWeight = "bold";
        }
    };
    position() {
        // more code here
    }
    color() {
        // some more code here
    }
    size() {
        // the last piece of code here
    }
}

// function init() {
//     document.getElementById("bold").onclick = function() {
//         let foo = document.getElementById("change");
//         if (foo.style.fontWeight === "bold") {
//             foo.style.fontWeight = "normal";
//         } else {
//             foo.style.fontWeight = "bold";
//         }
//     }

//     document.getElementById("position").onclick = function() {
//         let foo = document.getElementById("change");
//         if (foo.style.position === 'static') {
//             foo.style.position = 'relative';
//             foo.style.top = '200px';
//         } else {
//             foo.style.position = 'static';
//         }
//     }

//     document.getElementById("color").onclick = function() {
//         let foo = document.getElementById("change");
//         if (foo.style.color === 'black') {
//             foo.style.color = "#c5c5c5";
//             foo.style.backgroundColor = "#33ff3f";
//         } else {
//             foo.style.color = 'black';
//             foo.style.backgroundColor = 'white';
//         }
//     }

//     document.getElementById("size").onclick = function() {
//         let foo = document.getElementById("change");
//         if (foo.style.fontSize === '1.5em') {
//             foo.style.fontSize = "2em";
//         } else {
//             foo.style.fontSize = '1.5em';
//         }
//     }
// }

// function init() {
//     let buttons = document.getElementsByTagName("button");
//     for (let i = 0; i < buttons.length; i++) {
//         function simplify() {
//             if (buttons[i].id === "bold") {
//                 buttons[i].onclick = function() {
//                     buttons[i].style.fontWeight = "700";
//                 }
//             }
//         }
//     }
// }
