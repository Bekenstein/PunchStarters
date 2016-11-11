function render(){
    let html = '<label>Ingredients:</label>' +
        '<div class="list-holder"><select class="input-ingredients"></select></div>' +
        '<div><input class="new-ingredient" placeholder="Add ingredients..."></div>' +
        '<div class="button-holder">' +
        '<button class="add-ingredient-button">Add</button>' +
        '<button class="remove-ingredient-button">Remove</button>' +
        '</div>'+
        '<label>Recipe:</label>' +
        '<div class="input-recipe"><input type="text" placeholder="Recipe..."></div>';
    $('.individual-parameters').html(html);
}

function attachEvents(){
    $('.add-ingredient-button').on('click', function (ev) {
        ev.preventDefault();
        let input = $('.new-ingredient');
        let val = input.val();
        $('.input-ingredients').append($('<option>').val(val).text(val));
        input.val('');
    });

    $('.remove-ingredient-button').on('click', function (ev) {
        ev.preventDefault();
        let select = $('.input-ingredients');
        let val = select.find(':selected');
        select.find(val).remove();
    });
}
module.exports = {render, attachEvents};
