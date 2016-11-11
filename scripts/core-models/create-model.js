let movie = require('./functions/movie.js');
let game = require('./functions/game.js');
let innovative = require('./functions/innovative.js');
let food = require('./functions/food.js');
let crafts = require('./functions/crafts.js');
let submitButton = require('./functions/submit.js');

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
                .append($('<label>').text('Name:')
                    .append($('<div>').addClass('input-holder')
                        .append($('<input>').addClass('input-name').attr('type', 'text').attr('placeholder', 'Name...').attr('maxlength', '20'))))
                .append($('<label>').text('Manufacturer:')
                    .append($('<div>').addClass('input-holder')
                        .append($('<input>').addClass('input-manufacturer').attr('type', 'text').attr('placeholder', 'Manufacturer...').attr('maxlength', '20'))))
                .append($('<label>').text('Description:')
                    .append($('<div>').addClass('input-holder')
                        .append($('<textarea>').addClass('input-description').attr('type', 'text').attr('placeholder', 'Description...').attr('rows', '2')))))

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
        for (let i = 0; i < 3; i++) {
            html.append($('<label>').append($('<div>').addClass('input-holder'))
            )
        }
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
                case 'Movie':
                {
                    that.renderCreateMovieModel();
                    that.attachEventsCreateMovieModel();
                    break;
                }
                case 'Game':
                {
                    that.renderCreateGameModel();
                    that.attachEventsCreateGameModel();
                    break;
                }
                case 'Innovative':
                {
                    that.renderCreateInnovativeModel();
                    break;
                }
                case 'Food':
                {
                    that.renderCreateFoodModel();
                    that.attachEventsCreateFoodModel();
                    break;
                }
                case 'Crafts':
                {
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




        $('.submit-button-holder').on('click', submitButton.submit);
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