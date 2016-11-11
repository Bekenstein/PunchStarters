let MoviePunchStarter = require('../../punch-starters/movie-punch-starter.js');
let GamePunchStarter = require('../../punch-starters/game-punch-starter.js');
let FoodPunchStarter = require('../../punch-starters/food-punch-starter.js');
let CraftsPunchStarter = require('../../punch-starters/crafts-punch-starter.js');
let InnovativePunchStarter = require('../../punch-starters/innovative-punch-starter.js');

function submit() {
    let selectedModel = $('.punch-starter-category select').find(':selected').val();
    let punchStarter = {};
    let id = 1;
    let name = $('.input-name').val();
    let manufacturer = $('.input-manufacturer').val();
    let description = $('.input-description').val();
    let genres = addItemsFromList('.input-genres');
    let options = $('.input-genres').find('option');
    let targetPrice = Number($('.input-target-price'));
    switch (selectedModel){
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
    $('.wrapper main').trigger('createPunchStarter', [punchStarter]);
}

function addItemsFromList(listSelector) {
    let arr = [];
    let options = $(listSelector).find('option');
    for (let opt of options){
        arr.push(opt.value);
    }
    return arr;
}

module.exports = {submit};
