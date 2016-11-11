function render(){
    let html = '<label>Actors:</label>' +
        '<div class="list-holder"><select class="input-ingredients"></select></div>' +
        '<div><input class="new-ingredient" placeholder="Add ingredients..."></div>' +
        '<div class="button-holder">' +
        '<button class="add-ingredient-button">Add</button>' +
        '<button class="remove-ingredient-button">Remove</button>' +
        '</div>'+
        '<label>Recipe:</label>' +
        '<div class="input-recipe"><input type="text" placeholder="Recipe..."></div>';
}

function attachEvents(){
    $('.add-ingredient-button').on('click', function () {
        let input = $('.new-ingredient');
        let ingredient = input.val();
        $('.input-ingredients').append($('<option>').val(ingredient).text(ingredient));
        input.val('');
    });

    $('.remove-ingredient-button').on('click', function () {
        let select = $('.input-ingredients');
        let ingredient = select.find(':selected');
        select.find(ingredient).remove();
    });
}
module.exports = {render, attachEvents};
