class PunchStarterModel {
	//TODO: Implement Punch Starter Model
    constructor(){

    }
    render(punchStarter){
     let html = `<div class = "punch-starter-wrapper">       `+
             `<div class = "punch-starter-caption">          `+
             `<label>${punchStarter.name}</label>            `+
             `<label>${punchStarter.type}</label>            `+
             `</div>                                         `+
             `<div class = "punch-starter-resume">           `+
             `<label>Manufacturer</label>                    `+
             `<p>${punchStarter.manufacturer}</p>            `+
             `<label>Description</label>                     `+
             `<p>${punchStarter.description}</p>             `+
             `</div>                                         `+
             `<div class = "punch-starter-lists">            `+
             `</div>                                         `+
             `<div class = "punch-starter-progress">         `+
             `</div>                                         `+
             `</div>                                         `;
        $('.wrapper main').html(html);
    }
    attachEvents(punchStarter){

    }
    renderLists(punchStarter){

    }
    renderProgress(punchStarter){

    }
}

module.exports = PunchStarterModel;