let BasePunchStarter = require('./base-punch-starter');

class GamePunchStarter extends BasePunchStarter{
	constructor(id, name, manufacturer, description,genres,targetPrice, technologiesUsed){
	    super(id, name, manufacturer, description,genres,targetPrice);
        if(!Array.isArray(technologiesUsed)){
            throw new TypeError('technology used should be an Array');
        }
        this._technologiesUsed = technologiesUsed;
    }
    get technologiesUsed(){
        return this._technologiesUsed;
    }
}

module.exports = GamePunchStarter;