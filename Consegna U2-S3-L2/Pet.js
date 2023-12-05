class Pet {
    constructor(petName, ownerName, species, breed) {
        (this.petName = petName), (this.ownerName = ownerName), (this.species = species), (this.breed = breed);
    }

    isOwnerTheSame(otherPet) {
        return this.ownerName === otherPet.ownerName;
    }
}
/*const pet1 = new Pet("Scooby", "Shaggy", "dog", "Great Dane");
const pet2 = new Pet("Yoghi", "Luigi", "dog", "Husky");
const pet3 = new Pet("Akira", "Luigi", "dog", "Husky");
*/
const petListArray = [];
window.onload = () => {
    const form = document.getElementById("petInfo");
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const petName = document.getElementById("petName").value;
        const ownerName = document.getElementById("ownerName").value;
        const species = document.getElementById("species").value;
        const breed = document.getElementById("breed").value;
        const newPet = new Pet(petName, ownerName, species, breed);
        petListArray.push(newPet);
        generateList();
        resetValue();
    });

    function generateList() {
        const petList = document.getElementById("petList");
        petList.innerHTML = "";
        petListArray.forEach((pet) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `Name: ${pet.petName}, "Owner Name": ${pet.ownerName}, Species: ${pet.species}, Breed: ${pet.breed}`;
            petList.appendChild(listItem);
        });
    }
    function resetValue() {
        petName.value = "";
        ownerName.value = "";
        species.value = "";
        breed.value = "";
    }
};
