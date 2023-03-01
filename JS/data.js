class Character {

    constructor(id, image, name, status, species, gender, origin, location) {

        this.id = id,
        this.image = image,
        this.name = name,
        this.status = status,
        this.species = species,
        this.gender = gender,
        this.origin = origin,
        this.location = location

    };

};

export const getCharacters = () => {
    
    return fetch(`https://rickandmortyapi.com/api/character`)
    .then(response => response.json())
    .then(rawCharactersObjects => {
        console.log(rawCharactersObjects.results);
        return rawCharactersObjects.results.map(({ id, image, name }) => new Character(id, image, name));
    });

};

