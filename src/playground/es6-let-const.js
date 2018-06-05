var nameVar = 'Matthew';
var nameVar = 'Moop';
console.log('nameVar', nameVar);

let nameLet = 'Dorp';
nameLet = 'Borky Pupper';
console.log('nameLet', nameLet);

const nameConst = 'Froop';
console.log('nameConst', nameConst);

function getPetName(){
    const petName = 'Frost';
    return petName;
}

const petName = getPetName();
console.log(petName);

//Block Scoping

const fullName = 'Matthew Killer';
let firstName;

if (fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);