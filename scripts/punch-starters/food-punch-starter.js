let BasePunchStarter = require('./base-punch-starter.js');

class FoodPunchStarter extends BasePunchStarter{
    constructor(id, name, manufacturer, description,genres,targetPrice, ingredients, recipe){
        super('Food',id, name, manufacturer, description,genres,targetPrice);
        this._ingredients = BasePunchStarter.validateArray(ingredients);
        this._recipe = BasePunchStarter.validateString(recipe);
    }

    get ingredients(){
        return this._ingredients;
    }
    get recipe(){
        return this._recipe;
    }
}

module.exports = FoodPunchStarter;