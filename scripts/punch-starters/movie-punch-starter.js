let BasePunchStarter = require("./base-punch-starter.js");

class MoviePunchStarter extends BasePunchStarter {

    constructor(id, name, manufacturer, description, genres, targetPrice, director, actor) {
        super(id, name, manufacturer, description, genres, targetPrice);
        this._director = BasePunchStarter.validateString(director);
        this._actor = BasePunchStarter.validateArray(actor).map(x=>BasePunchStarter.validateString(x));
    }

    get director() {
        return this._director;
    }

    get actor() {
        return this._actor;
    }
}

module.exports = MoviePunchStarter;
