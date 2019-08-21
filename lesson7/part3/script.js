'use strict';

class Options {
    constructor (height, width, bg, fontSize, textAlign) {
        this.height = height,
        this.width = width,
        this.bg = bg,
        this.fontSize = fontSize,
        this.textAlign = textAlign
    }
    create() {
        let newEl = document.createElement('div');
        // newEl.style.cssText = `width: ${this.width}`;
        newEl.style.cssText =  `height: ${this.height}px;
                                width: ${this.width}px;
                                background: ${this.bg};
                                font-size: ${this.fontSize}px;
                                text-align: ${this.textAlign}`;
        document.querySelector('.wrapper').appendChild(newEl);
    }
}

let rect = new Options(200, 300, 'red', 12, 'left');
rect.create();
console.log(rect);