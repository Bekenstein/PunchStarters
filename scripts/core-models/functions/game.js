function render(){
    let html = '<label>Technologies:</label>' +
        '<div class="list-holder"><select class="input-technologies"></select></div>' +
        '<div><input class="new-technology" placeholder="Add technology..."></div>' +
        '<div class="button-holder">' +
            '<button class="add-technology-button">Add</button>' +
            '<button class="remove-technology-button">Remove</button>' +
        '</div>';
    $('.individual-parameters').html(html)
}

function attachEvents(){
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
module.exports = {render, attachEvents};
