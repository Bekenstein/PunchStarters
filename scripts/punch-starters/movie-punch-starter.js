let BasePunchStarter = require("./base-punch-starter.js");

class MoviePunchStarter extends BasePunchStarter {

	//TODO: Implement MoviePunchStarter
    constructor(id,name,manufacturer,description,genres,targetPrice,director,actor){
        super(id,name,manufacturer,description,genres,targetPrice);
        this._director = BasePunchStarter.checkStringValidaty(director);
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
//console.log(new MoviePunchStarter(2,'Name','Sony','Descr',['fg','sg'],34,'sss',['33']));

module.exports = MoviePunchStarter;
//console.log(new MoviePunchStarter(10,"Pesho","Gosho","Action",["Petko","Metko","Getko"],1,"Stamat",["Kamen","Balen"]));