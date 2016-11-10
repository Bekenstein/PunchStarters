class ListModel {
    //TODO: Implement List Model
    constructor() {

    }

    render(database) {
        database.sort((a, b)=> {
            console.log(a);
            console.log(a[0]);
            let oldReturn = a[0] - b[0];
            console.log(oldReturn);
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
            table.append($('<tr>')
                .append($('<td>').text(data.id))
                .append($('<td>').text(data.name))
                .append($('<td>').text(data.manufacturer))
                .append($('<td>').text(data._type))
                .append($('<td>').text(`${progress}%`)));
        }

        html.append($('<table>').addClass('punch-starter-table').append(table));
        $('.wrapper main').html(html);
    }
}

module.exports = ListModel;