class PunchStarterModel {
	//TODO: Implement Punch Starter Model
    constructor(){

    }
    render(punchStarter){
     let html = `<div class="punch-starter-wrapper">                                          `+
                  `<div class="punch-starter-caption">                                        `+
                    `<label>${punchStarter.name}</label>                                        `+
                    `<label>${punchStarter.constructor.name.replace('PunchStarter','')}</label> `+
                  `</div>                                                                       `+
                  `<div class="punch-starter-resume">                                         `+
                    `<label>Manufacturer</label>                                                `+
                    `<p>${punchStarter.manufacturer}</p>                                        `+
                    `<label>Description</label>                                                 `+
                    `<p>${punchStarter.description}</p>                                         `+
                  `</div>                                                                       `+
                  `<div class="punch-starter-lists">                                          `+
                  `</div>                                                                       `+
                  `<div class="punch-starter-progress">                                       `+
                  `</div>                                                                       `+
                `</div>                                                                         `;
        console.log(html);

        $('.wrapper main').html(html);
        this.renderLists(punchStarter);
        this.renderProgress(punchStarter);

    }
    attachEvents(punchStarter){

    }
    renderLists(punchStarter){
    let html = `<div>                                                                           `+
                 `<label>Genres</label>                                                         `+
                 `<ul>                                                                          `;
        for(let genres of punchStarter.genres){
            html+= `<li>${genres}</li>\n`;
        }
        html+= `</ul>                                                                           `+
                `</div>                                                                         `;
        switch(punchStarter.constructor.name.replace('PunchStarter','')){
            case 'Movie':
                html += `<div>`+
                          `<label>Actors</label>`+
                          `<ul>`;
                for(let actor of punchStarter.actor){
                    html+= `<li>${actor}</li>\n`;
                }
                html+= `</ul>`+
                        `</div>`;
                html+=`<div>`+
                        `<label>Director</label>`+
                        `<p>${punchStarter.director}</p>`+
                      `</div>`;
                break;
            case 'Game':
                html+= `<div>`+
                        `<label>Technologies Used</label>`;
                for(let technologies of punchStarter.technologiesUsed){
                    html += `<li>${obj.technologies}</li>`;
                }
                html += `</div>`;
                break;
            case 'Innovative':
                break;
            case 'Food':
                html += `<div>`+
                        `<label>Ingredients</label>`;
                for(let ingredients of punchStarter.ingredients){
                    html += `<li>${ingredients}</li>`;
                }
                html+= `</div>`;
                html += `<div>`+
                         `<label>Recipe</label>`+
                         `<p>${punchStarter.recipe}</p>`+
                        `</div>`;
                break;
                break;
            case 'Crafts':
                html += `<div>`+
                    `<label>Resources</label>`;
                for(let resources of punchStarter.resources){
                    html += `<li>${resources}</li>`;
                }
                html+= `</div>`;
                break;
        }
        $('.punch-starter-lists').html(html);
    }

    renderProgress(punchStarter){
      let html = `<p>Progress</p>`+
              `<div class="donate-holder">`+
              `<div class="progress-bar-outer">`+
              `<div class="progress-bar-inner">`+
              ``

    }
}

module.exports = PunchStarterModel;