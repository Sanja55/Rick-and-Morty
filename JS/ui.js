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