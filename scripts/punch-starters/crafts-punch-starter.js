let BasePunchStarter = require('./base-punch-starter.js');

class CraftsPunchStarter extends BasePunchStarter {

    constructor(id, name, manufacturer, description, genres, targetPrice, resources) {
        super('Crafts', id, name, manufacturer, description, genres, targetPrice);
        this._resources = BasePunchStarter.validateArray(resources).map(x=>BasePunchStarter.validateString(x));
    }
    get resources() {
        return this._resources;
    }
}
//console.log(new CraftsPunchStarter(2,'Name','Sony','Descr',['fg','sg'],34,['fgdgf','sdfsdf']));

module.exports = CraftsPunchStarter;