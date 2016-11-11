let movie = require('./functions/movie.js');
let game = require('./functions/game.js');
let innovative = require('./functions/innovative.js');
let food = require('./functions/food.js');
let crafts = require('./functions/crafts.js');

class CreateModel {
    constructor(){

    }
    render(categories){
        //TODO:
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