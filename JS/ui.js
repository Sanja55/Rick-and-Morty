const charactersBox = document.querySelector("#characters");

export let renderCharacters = characters => {

    let html = `
    
    <div class="row d-flex justify-content-around align-items-center g-5 p-3">
    `;

    characters.forEach(character => {

        html += `
        
        <div class="card" id="${character.id}">
            
          <img src="${character.image}" class="card-img-top mt-3 img-fluid rounded" alt="Character Image">
            
          <div class="card-body">
              <h3 class="card-title mt-3">${character.name}</h3>
              <a href="#" class="btn border-2 border-success m-4"><i class="fa fa-thumbs-up"></i> Like</a>
          </div>
        
        </div>
        
        `
    });

    html += `</div>`;

    charactersBox.innerHTML = html;
}

export let renderSingleCharacter = character => {

    let singleCharacterHmtl = `
    
    <div class="card d-flex flex-column justify-content-center align-items-center" style="width: 50%;">
      
      <div class="character-name row">
        <h1>${character.name}</h1>
      </div>
      
      <div class="image m-5">
        <img src="${character.image}">
      </div>
      
      <div class="card-body d-flex flex-row">
        
        <div id="status">
          <h5 class="card-title">Character Status</h5>
          <p class="card-text">${character.status}</p>
        </div>

        <div id="species">
          <h5 class="card-title">Species:</h5>
          <p class="card-text">${character.species}</p>
        </div>

        <div id="gender">
          <h5 class="card-title">Gender</h5>
          <p class="card-text">${character.gender}</p>
        </div>

        <div id="origin">
          <h5 class="card-title">Origin:</h5>
          <p class="card-text">${character.origin.name}</p>
        </div>

        <div id="location">
          <h5 class="card-title">Location:</h5>
          <p class="card-text">${character.location.name}</p>
        </div>


      </div>

      <div id="back-button">
        <a href="#" class="btn btn-primary">Back to Characters</a>
      </div>

    </div>
    
    `
    charactersBox.innerHTML = singleCharacterHmtl;


}