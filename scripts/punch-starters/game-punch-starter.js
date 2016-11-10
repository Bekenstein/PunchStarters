let BasePunchStarter = require('./base-punch-starter');

class GamePunchStarter extends BasePunchStarter{
	constructor(id, name, manufacturer, description,genres,targetPrice, technologiesUsed){
	    super(id, name, manufacturer, description,genres,targetPrice);
        this._technologiesUsed = technologiesUsed;
    }
    get technologiesUsed(){
        if(!Array.isArray(this._technologiesUsed)){
            throw new TypeError('technology used should be an Array');
        }
        return this._technologiesUsed;
    }
}

module.exports = GamePunchStarter;