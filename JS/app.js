import { getCharacters, getSingleCharacter } from "./data.js";
import { renderCharacters, renderSingleCharacter } from "./ui.js";

const charactersBox = document.querySelector("#characters");
const rickAndMortyLogoButton = document.querySelector("#rick-and-morty");
const likeButton = document.querySelector(".like-button");

console.log(likeButton);

const getData = () => {
    getCharacters().then((characters) => {
        renderCharacters(characters);
    })
}

getData();



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

// const clickOnLikeButton = event => {

//     const targetButton = event.target;
//     //console.log(targetButton);
//     if(!targetButton.classList.contains(".like-button")) {
//         return;
//     };

//     targetButton.classList.toggle("like-toggle");

// } 

 const clickOnLikeButton = () => {
     
    likeButton.classList.toggle("like-toggle");
}

charactersBox.addEventListener("click", onCharacterImageClick);
rickAndMortyLogoButton.addEventListener("click", getData);
likeButton.addEventListener("click", clickOnLikeButton);