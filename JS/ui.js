const charactersBox = document.querySelector("#characters");

export let renderCharacters = characters => {

    let html = `
    
    <div class="row d-flex justify-content-around align-items-center g-5 p-3">
    `;

    characters.forEach(character => {

        html += `
        
        <div class="card" id="${character.id}">
            
          <img src="${character.image}" class="card-img-top img-fluid  mt-4 rounded" alt="Character Image">
            
          <div class="card-body d-flex flex-column justify-content-center align-items-center">
              <h3 class="card-title mt-3">${character.name}</h3>
              <a href="#" class="btn border-5 border-success m-4 col-8"><i class="fa fa-thumbs-up"></i> Like</a>
          </div>
        
        </div>
        
        `
    });

    html += `</div>`;

    charactersBox.innerHTML = html;
}

export let renderSingleCharacter = character => {

    let singleCharacterHmtl = `
   
    <div>

        <h1 class="text-center m-5 fw-bold">${character.name}</h1>
        
        <div id="character-info" class="d-flex flex-row flex-wrap justify-content-around">

            <div class="col-md-7 rounded">
                <img src=${character.image} class="card-img-top img-fluid img-thumbnail rounded-3 m-5" alt="Character Image">
            </div>
            
            <div class="col-md-4">
                
                <ul class="p-1 word-wrap list-group img-thumbnail text-center">

                    <li class="list-group-item"><h4>Status:</h4><p>${character.status}</p></li>
                    <li class="list-group-item"><h4>Species:</h4><p>${character.species}</p></li>
                    <li class="list-group-item"><h4>Gender:</h4><p>${character.gender}</p></li>
                    <li class="list-group-item"><h4>Origin:</h4><p>${character.origin}</p></li>
                    <li class="list-group-item"><h4>Location:</h4><p>${character.location}</p></li>
                    <li class="list-group-item"><h4>Episodes:</h4><p>${character.episode}</p></li>
                
                </ul>
                
            </div>

        </div>

        <div class="column d-flex justify-content-center m-5">
            <a href="" class="btn go-back-button">Go Back to Home Page</a>
        </div>


    </div

    
    `

    charactersBox.innerHTML = singleCharacterHmtl;
   
}