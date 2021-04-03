class HorseObserve {
    constructor() {
        this.distance = 0;
    }

    setDistance () {
        ++this.distance;
        // console.log('this.distance', this.distance)
    }

    getDistance () {
        return this.distance;
    }
}

const observer = new HorseObserve();

class Horse {
    constructor(name, energy) {
        this.timer = 0;
        this.name = name;
        this.energy = energy;
        this.distance = 0;
    }

    run () {
        setInterval(() => {
            if (this.energy) {
                // console.log(this.name + ' running')

                this.energy -= 1;
                this.distance += 1;
                observer.setDistance();

                // console.log(
                //     `${this.name} info:
                //     - energy ${this.energy};
                //     - distance ${this.distance};
                // `);
            } else {
                setTimeout(() => {
                    this.energy += 1;

                    // console.log(this.name + ' rest. Energy = ', this.energy)
                }, 5 * 1000);
            }

            ++this.timer;
            // console.log('-------------------------')
            // console.log('|  ', this.timer + ' second')
            // console.log('-------------------------')
        }, 1000);
    };
}

console.log('click');

// const horsePegasus = new Horse('Pegasus')
// const horseSleipnir = new Horse('Sleipnir')
//
// console.log(horsePegasus)
//
// horsePegasus.run()
// horseSleipnir.run()

for (let i = 0; i < 100; i++) {
    const horse = new Horse('horse' + i, Math.floor(Math.random() * 10))
    horse.run();
}

setInterval(() => console.log(observer.getDistance()), 1000)
