let movie = require('./functions/movie.js');
let game = require('./functions/game.js');
let innovative = require('./functions/innovative.js');
let food = require('./functions/food.js');
let crafts = require('./functions/crafts.js');
let MoviePunchStarter = require('../punch-starters/movie-punch-starter.js');
let GamePunchStarter = require('../punch-starters/game-punch-starter.js');
let FoodPunchStarter = require('../punch-starters/food-punch-starter.js');
let CraftsPunchStarter = require('../punch-starters/crafts-punch-starter.js');
let InnovativePunchStarter = require('../punch-starters/innovative-punch-starter.js');
let id = 6;

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
        let form = $('<form>')
            .append($('<div>').addClass('main-parameters')
                .append($('<label>').text('Name:'))
                .append($('<div>').addClass('input-holder')
                    .append($('<input>').addClass('input-name').attr('type', 'text').attr('placeholder', 'Name...').attr('maxlength', '20')))
                .append($('<label>').text('Manufacturer:'))
                .append($('<div>').addClass('input-holder')
                    .append($('<input>').addClass('input-manufacturer').attr('type', 'text').attr('placeholder', 'Manufacturer...').attr('maxlength', '20')))
                .append($('<label>').text('Description:'))
                .append($('<div>').addClass('input-holder')
                    .append($('<textarea>').addClass('input-description').attr('type', 'text').attr('placeholder', 'Description...').attr('rows', '2'))))

            .append($('<div>').addClass('secondary-parameters')
                .append($('<label>').text('Genres:'))
                .append($('<div>').addClass('list-holder')
                    .append($('<select>').addClass('input-genres')))
                .append($('<div>').addClass('input-holder')
                    .append($('<input>').addClass('input-genre').attr('type', 'text').attr('placeholder', 'Add genre...')))
                .append($('<div>').addClass('button-holder')
                    .append($('<button>').addClass('add-genre-button').text('Add'))
                    .append($('<button>').addClass('remove-genre-button').text('Remove')))
                .append($('<label>').text('Target Price:'))
                .append($('<div>').addClass('input-holder')
                    .append($('<input>').addClass('input-target-price').attr('type', 'number').attr('placeholder', 'Target Price...'))))

            .append($('<div>').addClass('individual-parameters'));

        let formHolder = $('<div>').addClass('create-form-holder')
            .append(form)
            .append($('<div class="submit-button-holder">')
                .append($('<button>').text('Submit PunchStarter')));

        $('.wrapper main').html(html).append(formHolder);
        this.renderCreateMovieModel();
        this.attachEventsCreateMovieModel();
    }

    attachEvents() {
        let that = this;
        $('.punch-starter-category select').on('change', function (ev) {
            ev.preventDefault();
            let val = this.value;
            switch (val) {
                case 'Movie': {
                    that.renderCreateMovieModel();
                    that.attachEventsCreateMovieModel();
                    break;
                }
                case 'Game': {
                    that.renderCreateGameModel();
                    that.attachEventsCreateGameModel();
                    break;
                }
                case 'Innovative': {
                    that.renderCreateInnovativeModel();
                    break;
                }
                case 'Food': {
                    that.renderCreateFoodModel();
                    that.attachEventsCreateFoodModel();
                    break;
                }
                case 'Crafts': {
                    that.renderCreateCraftsModel();
                    that.attachEventsCreateCraftsModel();
                    break;
                }
            }
        });

        $('.add-genre-button').on('click', function (ev) {
            ev.preventDefault();
            let input = $('.input-genre');
            let gender = input.val();
            $('.input-genres').append($('<option>').val(gender).text(gender));
            input.val('');
        });

        $('.remove-genre-button').on('click', function (ev) {
            ev.preventDefault();
            let select = $('.input-genres');
            let gender = select.find(':selected');
            select.find(gender).remove();
        });

        $('.submit-button-holder').on('click', submit);
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

function submit() {
    let selectedModel = $('.punch-starter-category select').find(':selected').val();
    let punchStarter = {};
    let name = $('.input-name').val();
    let manufacturer = $('.input-manufacturer').val();
    let description = $('.input-description').val();
    let genres = addItemsFromList('.input-genres');
    let options = $('.input-genres').find('option');
    let targetPrice = Number($('.input-target-price').val());
    switch (selectedModel) {
        case 'Movie':
            let director = $('.input-director input').val();
            let actors = addItemsFromList('.input-actors');
            punchStarter = new MoviePunchStarter(id, name, manufacturer, description, genres, targetPrice, director, actors);
            break;
        case 'Game':
            let technologiesUsed = addItemsFromList('.input-technologies');
            punchStarter = new GamePunchStarter(id, name, manufacturer, description, genres, targetPrice, technologiesUsed);
            break;
        case 'Food':
            let ingredients = addItemsFromList('.input-ingredients');
            let recipe = $('.input-recipe input').val();
            punchStarter = new FoodPunchStarter(id, name, manufacturer, description, genres, targetPrice, ingredients, recipe);
            break;
        case 'Crafts':
            let resources = addItemsFromList('.input-resources');
            punchStarter = new CraftsPunchStarter(id, name, manufacturer, description, genres, targetPrice, resources);
            break;
        case 'Innovative':
            punchStarter = new InnovativePunchStarter();
            break;
    }
    id++;
    $('.wrapper main').trigger('createPunchStarter', [punchStarter]);
}

function addItemsFromList(listSelector) {
    let arr = [];
    let options = $(listSelector).find('option');
    for (let opt of options) {
        arr.push(opt.value);
    }
    return arr;
}

module.exports = CreateModel;