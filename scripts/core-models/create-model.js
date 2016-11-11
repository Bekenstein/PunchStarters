let movie = require('./functions/movie.js');
let game = require('./functions/game.js');
let innovative = require('./functions/innovative.js');
let food = require('./functions/food.js');
let crafts = require('./functions/crafts.js');

class CreateModel {
    constructor(){

    }
    render(categories) {
        let html = $('<div>').addClass('create-title').text('Create a PunchStarter')
            .append($('<div>').addClass('punch-starter-category')
                .append($('<select>')));
        $('.wrapper main').html(html);

    }
    attachEvents(){
        //TODO:
    }

    renderMovieModel(){
        movie.render();
    }
    attachEventsCreateMovieModel(){
        movie.attachEvents();
    }

    renderCreateGameModel(){
        game.render();
    }
    attachEventsCreateGameModel(){
        game.attachEvents();
    }

    renderCreateInnovativeModel(){
        innovative.render();
    }

    renderCreateFoodModel(){
        food.render();
    }
    attachEventsCreateFoodModel(){
        food.attachEvents();
    }

    renderCreateCraftsModel(){
        crafts.render();
    }
    attachEventsCreateCraftsModel(){
        crafts.attachEvents();
    }
}

module.exports = CreateModel;