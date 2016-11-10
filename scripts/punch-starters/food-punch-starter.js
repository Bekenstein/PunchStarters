let BasePunchStarter = require('./base-punch-starter');

class FoodPunchStarter extends BasePunchStarter{
    constructor(id, name, manufacturer, description,genres,targetPrice, ingredients, recipe){
        super(id, name, manufacturer, description,genres,targetPrice);
        this._ingredients = ingredients;
        this._recipe = recipe;
    }

    get ingredients(){
        if(!Array.isArray(this._ingredients)){
            throw new TypeError('ingredients should be an Array')
        }
        return this._ingredients;
    }
    get recipe(){
        if(typeof this._recipe !== 'string'){
            throw new TypeError('recipe must be a string')
        }
        return this._recipe;
    }
}

module.exports = FoodPunchStarter;