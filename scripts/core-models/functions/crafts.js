function render(){
    let html = '<label>Resources needed:</label>' +
        '<div class="list-holder"><select class="input-resources"></select></div>' +
        '<div class="input-holder"><input class="new-resource" placeholder="Add resource..."></div>' +
        '<div class="button-holder">' +
        '<button class="add-resource-button">Add</button>' +
        '<button class="remove-resource-button">Remove</button>' +
        '</div>';
    $('.individual-parameters').html(html)
}

function attachEvents(){
    $('.add-resource-button').on('click', function (ev) {
        ev.preventDefault();
        let input = $('.new-resource');
        let resource = input.val();
        $('.input-resources').append($('<option>').val(resource).text(resource));
        input.val('');
    });

    $('.remove-resource-button').on('click', function (ev) {
        ev.preventDefault();
        let select = $('.input-resources');
        let resource = select.find(':selected');
        select.find(resource).remove();
    });
}
module.exports = {render, attachEvents};
