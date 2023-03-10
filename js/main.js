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