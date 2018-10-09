window.onload = init;

function init() {
    const foo = new ParagraphChanger(document.getElementById("change"));
}

class ParagraphChanger {
    constructor(paragraph) {
        this.paragraph = paragraph;
        for (let i = 0; i < 4; i++) {
            let btn = document.createElement("button");
            document.body.appendChild(btn);
            switch (i) {
                case 0: btn.textContent = 'bold'; this.bold(); break;
                case 1: btn.textContent = 'position'; this.position(); break;
                case 2: btn.textContent = 'color'; this.color(); break;
                case 3: btn.textContent = 'size'; this.size(); break;
            }
        };
    }
    bold() {
        let foo = this.paragraph;
        let btn = document.querySelectorAll("button");
        btn[0].onclick = function() {
            if (foo.style.fontWeight === "bold") {
                foo.style.fontWeight = "normal";
            } else {
                foo.style.fontWeight = "bold";
            }
        }
    };
    position() {
        let foo = this.paragraph;
        let btn = document.querySelectorAll("button");
        btn[1].onclick = function() {
            if (foo.style.position === 'static') {
                foo.style.position = 'relative';
                foo.style.top = '200px';
            } else {
                foo.style.position = 'static';
            }
        }
    }
    color() {
        let foo = this.paragraph;
        let btn = document.querySelectorAll("button");
        btn[2].onclick = function() {
            if (foo.style.color === 'black') {
                foo.style.color = "#c5c5c5";
                foo.style.backgroundColor = "#33ff3f";
            } else {
                foo.style.color = 'black';
                foo.style.backgroundColor = 'white';
            }
        }
    }
    size() {
        let foo = this.paragraph;
        let btn = document.querySelectorAll("button");
        btn[3].onclick = function() {
            if (foo.style.fontSize === '1.5em') {
                foo.style.fontSize = "2em";
            } else {
                foo.style.fontSize = '1.5em';
            }
        }
    }
}
