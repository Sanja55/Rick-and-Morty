import { getCharacters, getSingleCharacter } from "./data.js";
import { renderCharacters, renderSingleCharacter } from "./ui.js";

const getData = () => {
    getCharacters().then((characters) => {
        renderCharacters(characters);
    })
}

getData();

const charactersBox = document.querySelector("#characters");

let onCharacterImageClick = event => {

    const targetElement = event.target;
    //console.log(targetElement.parentElement);

    const parent = targetElement.parentElement;

    const id = parent.getAttribute("id");
    //console.log(id);

    getSingleCharacter(id).then(character => {
        renderSingleCharacter(character);
    })
}

charactersBox.addEventListener("click", onCharacterImageClick);