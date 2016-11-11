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
        let form = $('<form>')
            .append($('<div>').addClass('main-parameters')
                .append($('<label>').text('Name:')
                    .append($('<div>').addClass('input-holder')
                        .append($('<input>').addClass('input-name').attr('type', 'text').attr('value', 'Name...').attr('maxlength', '20'))))
                .append($('<label>').text('Manufacturer:')
                    .append($('<div>').addClass('input-holder')
                        .append($('<input>').addClass('input-manufacturer').attr('type', 'text').attr('value', 'Manufacturer...').attr('maxlength', '20'))))
                .append($('<label>').text('Description:')
                    .append($('<div>').addClass('input-holder')
                        .append($('<textarea>').addClass('input-description').attr('type', 'text').attr('value', 'Description...').attr('rows', '2')))))

            .append($('<div>').addClass('secondary-parameters')
                .append($('<label>').text('Genres:')
                    .append($('<div>').addClass('list-holder')
                        .append($('<select>').addClass('input-genres'))
                        .append($('<div>')
                            .append($('<input>').addClass('input-genre').attr('type', 'text').attr('value', 'Add genre...')))
                        .append($('<div>').addClass('button-holder')
                            .append($('<button>').addClass('add-genre-button').text('Add'))
                            .append($('<button>').addClass('remove-genre-button').text('Remove'))))))

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
        //this.renderCreateMovieModel();
        //this.attachEventsCreateMovieModel();
    }

    attachEvents() {
        let that = this;
        $('.punch-starter-category select').on('change', function () {
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
    }

    renderCreateMovieModel() {
        movie.render();
    }

    attachEventsCreateMovieModel() {
        movie.attachEvents();
    }

    renderCreateGameModel() {
        let html = '<label>Technologies:</label>' +
            '<div class="list-holder"><select class="input-technologies"></select></div>' +
            '<div><input class="new-technology" placeholder="Add technology..."></div>' +
            '<div class="button-holder">' +
            '<button class="add-technology-button">Add</button>' +
            '<button class="remove-technology-button">Remove</button>' +
            '</div>';
        $('.individual-parameters').append(html)
    }

    attachEventsCreateGameModel() {
        $('.add-actor-button').on('click', function () {
            let input = $('.new-technology');
            let tech = select.val();
            $('.input-actors').append($('<option>').val(tech).text(tech));
            input.val('');
        });

        $('.remove-actor-button').on('click', function () {
            let select =$('.input-technologies');
            let tech = select.find(':selected');
            select.find(tech).remove();
        });
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