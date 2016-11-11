function render(){
    let html = '<label>Director:</label>' +
        '<div class="input-director"><input type="text" placeholder="Director...">' +
     '<label>Actors:</label>' +
            '<div class="list-holder"><select class="input-actors"></select></div>' +
            '<div><input class="new-actor" placeholder="Add actor..."></div>' +
            '<div class="button-holder">' +
                '<button class="add-actor-button">Add</button>' +
                '<button class="remove-actor-button">Add</button>' +
            '</div>'+
     '</div>';
    $('.individual-parameters').append(html)
}

function attachEvents(){

}
module.exports = {render, attachEvents};
