let movie = require('./functions/movie.js');
let game = require('./functions/game.js');
let innovative = require('./functions/innovative.js');
let food = require('./functions/food.js');
let crafts = require('./functions/crafts.js');

class CreateModel {
    constructor() {

    }

    render(categories) {
        let selectList = $('<select>');
        for (let obj in categories) {
            selectList.append($('<option>').val(categories[obj]).text(categories[obj]))
        }
        let html = $('<div>').addClass('create-title').text('Create a PunchStarter')
            .append($('<div>').addClass('punch-starter-category')
                .append(selectList));
        html.append($('<div>').addClass('main-parameters'));
        for (let i = 0; i < 3; i++) {
            html.append($('<label>').append($('<div>').addClass('input-holder'))
            )
        }
        $('.wrapper main').html(html);
        this.renderCreateMovieModel();
        this.attachEventsCreateMovieModel();

    }

    attachEvents() {
        $('.punch-starter-category select').on('change', function (ev, data, selector) {
            let a = data;
            let e = ev;
            let b = 6;
        });
        //TODO:
    }

    renderCreateMovieModel() {
        movie.render();
    }

    attachEventsCreateMovieModel() {
        movie.attachEvents();
    }

    renderCreateGameModel() {
        game.render();
    }

    attachEventsCreateGameModel() {
        game.attachEvents();
    }

    renderCreateInnovativeModel() {
        innovative.render();
    }

    renderCreateFoodModel() {
        food.render();
    }

    attachEventsCreateFoodModel() {
        food.attachEvents();
    }

    renderCreateCraftsModel() {
        crafts.render();
    }

    attachEventsCreateCraftsModel() {
        crafts.attachEvents();
    }
}

module.exports = CreateModel;