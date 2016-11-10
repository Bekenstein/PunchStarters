let BasePunchStarter = require('./base-punch-starter.js');

class CraftsPunchStarter extends BasePunchStarter {

    constructor(id, name, manufacturer, description, genres, targetPrice, resources) {
        super('Crafts',id, name, manufacturer, description, genres, targetPrice);
        this._resources = (function (resources) {
            let returnVal = [];
            if (!typeof resources == 'array') throw new TypeError();
            for (let index in resources) {
                let b = resources[Number(index)];
                let a = BasePunchStarter.checkStringValidaty(b);
                returnVal.push(a);
            }
            return returnVal;
        })(resources);
    }

    get resources() {
        return this._resources;
    }

}
//console.log(new CraftsPunchStarter(2,'Name','Sony','Descr',['fg','sg'],34,['fgdgf','sdfsdf']));

module.exports = CraftsPunchStarter;