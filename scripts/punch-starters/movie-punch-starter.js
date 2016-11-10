let basePunchStarter = require("./base-punch-starter");

class MoviePunchStarter extends basePunchStarter {

	//TODO: Implement MoviePunchStarter
    constructor(id,name,manufacturer,description,genres,targetPrice,director,actor){
        super(id,name,manufacturer,description,genres,targetPrice);
        this._director = this.checkStringValidaty(director);
        if(!Array.isArray(actor)){
            throw new TypeError("opa");
        }
        this._actor = actor;
    }
    get director(){
           return this._director;
    }
    get actor(){
        return this._actor;
    }
}

module.exports = MoviePunchStarter;