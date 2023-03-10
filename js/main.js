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


// Расширение встроенного типа данных
Array.prototype.max = function() {
    console.log(this)
	return Math.max.apply(null, this)
}

let testArr = [10, 3, -1, 6, 100, 0, 5, 4, -100 -7, 8, 9]
let testMax = testArr.max();
console.log(`Max value: ${testMax}`);