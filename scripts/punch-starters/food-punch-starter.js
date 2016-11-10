let BasePunchStarter = require('./base-punch-starter.js');

class FoodPunchStarter extends BasePunchStarter{
    constructor(id, name, manufacturer, description,genres,targetPrice, ingredients, recipe){
        super('Food',id, name, manufacturer, description,genres,targetPrice);
        if(!Array.isArray(ingredients)){
            throw new TypeError('ingredients should be an Array')
        }
        if(typeof recipe !== 'string'){
            throw new TypeError('recipe must be a string')
        }
        this._ingredients = ingredients;
        this._recipe = recipe;
    }

    get ingredients(){
        return this._ingredients;
    }
    get recipe(){
        return this._recipe;
    }
}

module.exports = FoodPunchStarter;