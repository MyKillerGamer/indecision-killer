// arguments object - no longer bound with arrow functions

const add = (a,b) => {
    //console.log(arguments);
    return a + b;
};

console.log(add(13,69,420));

//this keyword - no longer bound

const user = {
    name: 'Matthew',
    cities: ['Cape Town','Poole','Montague','Pretoria'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1,2,3,4,5],
    multiplyBy: 3,
    multiply(){
        return this.numbers.map((result) => this.multiplyBy * result);
    }
};

console.log(multiplier.multiply());