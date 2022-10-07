function classHierarchy() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }

        get area() {
            return this.units;
        }
        changeUnits(str) {
            let selector = {
                m: () => {
                    this.units = 'm';
                },
                cm: () => {
                    this.units = 'cm';
                },
                mm: () => {
                    this.units = 'mm';
                }
            }
            selector[str]()
        }
        toString(units) {
            return `Figures units: ${units}`
        }
    }
    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            radius = this.radius;
        }

        get radius() {
            let selector = {
                m: (x) => {
                    return x / 100;
                },
                cm: (x) => {
                    return x;
                },
                mm: (x) => {
                    return x * 10;
                }
            };
            return selector[this.units](this._radius)
        }
        set radius(num) {
            this._radius = num;
        }

        get area() {
            return Math.Pi * this.radius ** 2;
        }

        toString() {
            return [
                super.toString(),
                `Area ${this.area} - radius: ${this.radius}`,
            ].join(' ');
        }

    }
    class Rectangle extends Figure {
        constructor()
    }
}

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50