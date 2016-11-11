class PunchStarterModel {
	//TODO: Implement Punch Starter Model
    constructor(){

    }
    render(punchStarter){
     let html = `<div class = "punch-starter-wrapper">                                          `+
                  `<div class = "punch-starter-caption">                                        `+
                    `<label>${punchStarter.name}</label>                                        `+
                    `<label>${punchStarter.constructor.name.replace('PunchStarter','')}</label> `+
                  `</div>                                                                       `+
                  `<div class = "punch-starter-resume">                                         `+
                    `<label>Manufacturer</label>                                                `+
                    `<p>${punchStarter.manufacturer}</p>                                        `+
                    `<label>Description</label>                                                 `+
                    `<p>${punchStarter.description}</p>                                         `+
                  `</div>                                                                       `+
                  `<div class = "punch-starter-lists">                                          `+
                  `</div>                                                                       `+
                  `<div class = "punch-starter-progress">                                       `+
                  `</div>                                                                       `+
                `</div>                                                                         `;
        $('.wrapper main').html(html);
    }
    attachEvents(punchStarter){

    }
    renderLists(punchStarter){
    let html = `<div>                                                                           `+
                 `<label>Genres</label>                                                         `+
                 `<ul>                                                                          `;
        for(let obj of punchStarter){
            html+= `<li>${obj.genres}</li>\n`;
        }
        html+= `</ul>                                                                           `+
                `</div>                                                                         `;
        switch(punchStarter.constructor.name.replace('PunchStarter','')){
            case 'Movie':
                html += `<div>`+
                          `<label>Actors</label>`+
                          `<ul>`;
                for(let obj of punchStarter){
                    html+= `<li>${obj.actor}</li>\n`;
                }
                html+= `</ul>`+
                        `</div>`;
                html+=`<div>`+
                        `<label>Director</label>`+
                        `<p>${punchStarter.director}</p>`+
                      `</div>`;
                break;
            case 'Game':
                
        }

    }

    renderProgress(punchStarter){

    }
}

module.exports = PunchStarterModel;