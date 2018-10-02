window.onload = init;

function init() {
    document.getElementById("bold").onclick = function() {
        let foo = document.getElementById("change");
        if (foo.style.fontWeight === "bold") {
            foo.style.fontWeight = "normal";
        } else {
            foo.style.fontWeight = "bold";
        }
    }

    document.getElementById("position").onclick = function() {
        let foo = document.getElementById("change");
        foo.style.fontWeight = "700";
    }

    document.getElementById("color").onclick = function() {
        let foo = document.getElementById("change");
        foo.style.color = "#c5c5c5";
        foo.style.backgroundColor = "#33ff3f";
    }

    document.getElementById("size").onclick = function() {
        let foo = document.getElementById("change");
        foo.style.fontSize = "2em";
    }
}

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
