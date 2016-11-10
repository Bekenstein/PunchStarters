let basePunchStarter = require("./base-punch-starter");
class MoviePunchStarter extends basePunchStarter {
	//TODO: Implement MoviePunchStarter
    constructor(id,name,manufacturer,description,genres,targetPrice,director,actor){
        super(id,name,manufacturer,description,genres,targetPrice);
        this._director = director;
        this._actor = actor;
    }
    get director(){
        if(typeof (this._director) != "string"){
            throw new TypeError("opa");
        }
           return this._director;
    }
    get actor(){
        if(!Array.isArray(this._actor)){
            throw new TypeError("opa");
        }
        return this._actor;
    }
}

module.exports = MoviePunchStarter;