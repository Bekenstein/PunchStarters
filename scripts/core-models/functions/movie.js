function render(){
    let html = '<label>Director:</label>' +
        '<div class="input-director"><input type="text" placeholder="Director..."></div>' +
        '<label>Actors:</label>' +
        '<div class="list-holder"><select class="input-actors"></select></div>' +
        '<div><input class="new-actor" placeholder="Add actor..."></div>' +
        '<div class="button-holder">' +
            '<button class="add-actor-button">Add</button>' +
            '<button class="remove-actor-button">Remove</button>' +
        '</div>';
    $('.individual-parameters').html(html)
}

function attachEvents(){
    $('.add-actor-button').on('click', function (ev) {
        ev.preventDefault();
        let input = $('.new-actor');
        let actor = input.val();
        $('.input-actors').append($('<option>').val(actor).text(actor));
        input.val('');
    });

    $('.remove-actor-button').on('click', function (ev) {
        ev.preventDefault();
        let select = $('.input-actors');
        let actor = select.find(':selected');
        select.find(actor).remove();
    });
}
module.exports = {render, attachEvents};
