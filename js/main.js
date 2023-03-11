// Способы создаия объектов

let block = {
    size: 100,
    color: "red",
    radius: 5,
}

let block2 = new Object()
block2.size = 50
block2.color = "blue"
block2.radius = 0


let block3 = Object.create(
    {}, 
    {
        size: {
            value: 70,
            enumeratable: true,
            configurable: true
        },
        color: {
            value: 'yellow',
            enumeratable: true,
            configurable: true
        },
        radius: {
            value: 70,
            enumeratable: true,
            configurable: true
        }
    }
)

class Block{
    constructor(options){
        this.size = options.size
        this.color = options.color
        this.radius = options.radius
    }
}

let block4 = new Block({
    size: 25, 
    color: 'black', 
    radius: 2
});

// Создание конструктора

function Rectangle(selector, width, height, color){
    this.$elem = document.querySelector(selector);
    this.$elem.style.width = width + 'px';
    this.$elem.style.height = height + 'px';
    this.$elem.style.color = color;
}



class Ellipse{
    constructor(selector, x, y, color, radius){
        this.$elem = document.querySelector(selector);
        this.$elem.style.width = x + 'px';
        this.$elem.style.height = y + 'px';
        this.$elem.style.backgroundColor = color;
        this.$elem.style.borderRadius = radius + 'px';
    }
    show(){
        this.$elem.style.display = 'block';
    }
    hide(){
        this.$elem.style.display = 'none';
    }
    get color(){
        console.log(this.$elem.style.backgroundColor);
    }
    set color(newColor){
        this.$elem.style.backgroundColor = newColor;
    }
    get width(){
        console.log(this.$elem.style.width);
    }
    set width(newWidth){
        this.$elem.style.width = newWidth + 'px';
    }
    get height(){
        console.log(this.$elem.style.height);
    }
    set height(newHeight){
        this.$elem.style.height = newHeight + 'px';
    }
    get radius(){
        console.log(this.$elem.style.borderRadius);
    }
    set radius(newRadius){
        this.$elem.style.borderRadius = newRadius + 'px';
    }
}

//const header = document.querySelector('h1');
//const newElement = document.createElement(div);
//header.after(newElement)

let ellipse1 = new Ellipse('.el1', 50, 30, 'yellow', 5);
let ellipse2 = new Ellipse('.el2', 200, 100, 'red', 50);
let ellipse3 = new Ellipse('.el3', 500, 400, 'blue', 250);

ellipse3.color = 'green';
ellipse2.radius = 20;
ellipse1.width = 300;

// Расширение встроенного типа данных
Array.prototype.max = function() {
    console.log(this)
	return Math.max.apply(null, this)
}

let testArr = [10, 3, -1, 6, 100, 0, 5, 4, -100 -7, 8, 9]
let testMax = testArr.max();
console.log(`Max value: ${testMax}`);