class ЕlectricalAppliance {
    constructor(brand, consumption, size) {
        this.consumption = consumption;
        this.brand = brand;
        this.size = size;

    }

    countEnergy(supply) {
        return (`supply  is ${supply } `);

    }

}


class Refrigerator extends ЕlectricalAppliance {
    constructor(minT, weight, brand, consumption) {
        super(brand, consumption);

        this.weight = weight;
        this.minT = minT;
        this.shockFreez = function () {
            return `shockFreez teperature is ${this.minT*2}`;
        }
    }

}

const freezer = new Refrigerator(-33, 44, 'samsung', 66);



class Stove extends ЕlectricalAppliance {
    constructor(maxT, height, brand, consumption) {
        super(brand, consumption);

        this.height = height;
        this.maxT = maxT;

    }

}

const oven = new Stove(241, 23, 'yamaha', 55);

console.log(oven.consumption);
console.log(freezer.shockFreez());
console.log(freezer.brand);
console.log(oven.maxT);
console.log(oven.countEnergy(123));

console.log(oven);




class Rozetka {
    constructor() {
        this.consumptionCount = function (obj1, obj2) {
            return `consumption  is ${ obj1.consumption + obj2.consumption} `;

        }

    }



}

const Counter = new Rozetka(oven, freezer);

console.log(Counter.consumptionCount(oven, freezer));