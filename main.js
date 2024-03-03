const petPromise = fetch(
  "https://learnwebcode.github.io/pet-adoption-data/pets.json"
);
const pets = petPromise.json;
