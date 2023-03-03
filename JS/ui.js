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
   
    <div>

        <h1 class="text-center m-5 fw-bold">${character.name}</h1>
        
        <div id="character-info" class="d-flex flex-row flex-wrap justify-content-around">

            <div class="col-md-7 rounded">
                <img src=${character.image} class="card-img-top img-fluid img-thumbnail rounded-3" alt="Character Image">
            </div>
            
            <div class="col-md-4 rounded">
                
                <ul class="p-1 word-wrap list-group img-thumbnail text-center">

                    <li class="list-group-item"><h4>Status:</h4>${character.status}</li>
                    <li class="list-group-item"><h4>Species:</h4>${character.species}</li>
                    <li class="list-group-item"><h4>Gender:</h4>${character.gender}</li>
                    <li class="list-group-item"><h4>Origin</h4>${character.origin}</li>
                    <li class="list-group-item"><h4>Location:</h4>${character.location}</li>
                    <li class="list-group-item"><h4>Episodes:</h4> ${character.episode}</li>
                
                </ul>
                
            </div>

        </div>

        
    </div

    
    `

    charactersBox.innerHTML = singleCharacterHmtl;
   
}