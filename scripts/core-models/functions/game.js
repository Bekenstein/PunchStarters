function render(){
    let html = '<label>Technologies:</label>' +
        '<div class="list-holder"><select class="input-technologies"></select></div>' +
        '<div class="input-holder"><input class="new-technology" placeholder="Add technology..."></div>' +
        '<div class="button-holder">' +
            '<button class="add-technology-button">Add</button>' +
            '<button class="remove-technology-button">Remove</button>' +
        '</div>';
    $('.individual-parameters').html(html)
}

function attachEvents(){
    $('.add-technology-button').on('click', function (ev) {
        ev.preventDefault();
        ev.stopPropagation();
        let input = $('.new-technology');
        let val = input.val();
        $('.input-technologies').append($('<option>').val(val).text(val));
        input.val('');
    });

    $('.remove-technology-button').on('click', function (ev) {
        ev.preventDefault();
        let select =$('.input-technologies');
        let val = select.find(':selected');
        select.find(val).remove();
    });
}
module.exports = {render, attachEvents};
