class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  isOlder(ageToCompare) {
    return this.age > ageToCompare.age;
  }
}

const MarinaLucentini = new User("Marina", "Lucentini", 31, "Roma");
const ClaudiaBurali = new User("Claudia", "Burali", 18, "Napoli");
console.log(MarinaLucentini.isOlder(ClaudiaBurali));
const Pets = [];
class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  isSameOwner(ownerToCompare) {
    return this.ownerName === ownerToCompare.ownerName;
  }
}

const formPets = () => {
  const form = document.querySelector("form");
  form.onsubmit = (event) => {
    event.preventDefault();
    const petNameInput = document.getElementById("petName");
    const ownerNameInput = document.getElementById("ownerName");
    const speciesInput = document.getElementById("species");
    const breedInput = document.getElementById("breed");
    const PetsInput = new Pet(
      petNameInput.value,
      ownerNameInput.value,
      speciesInput.value,
      breedInput.value
    );

    const namePet = document.getElementById("namePet");
    const nameOwner = document.getElementById("nameOwner");
    const nameSpecies = document.getElementById("nameSpecies");
    const tipeOfBreed = document.getElementById("tipeOfBreed");
    namePet.innerText = PetsInput.petName;
    nameOwner.innerText = PetsInput.ownerName;
    nameSpecies.innerText = PetsInput.species;
    tipeOfBreed.innerText = PetsInput.breed;
    petNameInput.value = "";
    ownerNameInput.value = "";
    speciesInput.value = "";
    breedInput.value = "";

    // const PetsInput2 = new Pet(
    //   petNameInput.value,
    //   ownerNameInput.value,
    //   speciesInput.value,
    //   breedInput.value
    // );

    // Pets.push(PetsInput2);
    console.log(PetsInput);
    Pets.push(PetsInput);
    console.log(Pets);
  };
};
window.onload = () => {
  formPets();
};
