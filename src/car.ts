class Car {
    brand: string
    speed: number

    constructor(brand: string, speed: number) {
        this.brand = brand
        this.speed = speed
    }

    accelerate(acceleration: number): number {
        return this.speed = this.speed + acceleration
    }
}

const car = new Car('Toyota', 100)
console.log(car.accelerate(20)) // After fixing: will print 120