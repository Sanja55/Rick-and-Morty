import { getCharacters } from "./data.js";
import { renderCharacters } from "./ui.js";

const getData = () => {
    getCharacters().then((characters) => {
        renderCharacters(characters);
    })
}

getData();