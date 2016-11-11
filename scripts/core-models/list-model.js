class ListModel {
    //TODO: Implement List Model
    constructor() {

    }

    render(database) {
        database.sort((a, b)=> {
            return a.id - b.id;
        });
        let html = $('<div>').addClass('punch-starter-list-holder');
        let table = $('<tbody>');
        table.append($('<tr>')
            .append($('<th>').text('ID'))
            .append($('<th>').text('Name'))
            .append($('<th>').text('Manufacturer'))
            .append($('<th>').text('Type'))
            .append($('<th>').text('Progress'))
        );
        for (let data of database) {
            let progress = Number((data.accumulatedMoney / data.targetPrice) * 100).toFixed(2);
            table.append($('<tr>').on('click', function () {

                        $('.wrapper main').trigger('changePage', ['details', data] );

                })
                .append($('<td>').text(data.id))
                .append($('<td>').text(data.name))
                .append($('<td>').text(data.manufacturer))
                .append($('<td>').text(data.constructor.name.replace('PunchStarter', '')))
                .append($('<td>').text(`${progress}%`)));
        }

        html.append($('<table>').addClass('punch-starter-table').append(table));
        $('.wrapper main').html(html);
    }

    attachEvents() {

    }
}

module.exports = ListModel;