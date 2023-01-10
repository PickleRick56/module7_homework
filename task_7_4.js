function Еlectrical_Appliance(brand, size) {
    this.color = 'red',
        this.size = size,
        this.brand = brand
}


Еlectrical_Appliance.prototype.countEnergy = function (supply) {


    return (`supply  is ${supply } `);
};



function Refrigerator(minT, weight,consumption, brand) {
    this.minTemperature = minT;
    this.weight = weight;
    this.consumption=consumption;
    this.shockFreez = function () {
        return `shockFreez teperature is ${this.minTemperature*2}`;
    }
}

function Stove(maxT, height,consumption) {
    this.maxTemperature = maxT;
    this.height = height;
    this.consumption=consumption;

}


Refrigerator.prototype = new Еlectrical_Appliance('samsung');



Stove.prototype = new Еlectrical_Appliance();

const oven = new Stove(241, 23,66);
const freezer = new Refrigerator(-33, 12,55, 'cat');

console.log(`Потребление энергии равно: ${ freezer.consumption + oven.consumption}`);
console.log(oven.maxTemperature);
console.log(freezer.weight);
console.log(freezer.minTemperature);
console.log(freezer.countEnergy(24));
console.log(freezer.shockFreez());
console.log(freezer.brand);
console.log(freezer)
