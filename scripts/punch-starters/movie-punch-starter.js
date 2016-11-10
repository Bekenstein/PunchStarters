let BasePunchStarter = require("./base-punch-starter.js");

class MoviePunchStarter extends BasePunchStarter {

    constructor(id,name,manufacturer,description,genres,targetPrice,director,actor){
        super('Movie',id,name,manufacturer,description,genres,targetPrice);
        this._director = BasePunchStarter.validateString(director);
        this._actor = BasePunchStarter.validateArray(actor).map(x=>BasePunchStarter.validateString(x));
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
// console.log(new MoviePunchStarter(10,"Pesho","Gosho","Action",["Petko","Metko","Getko"],1,"Stamat",["Kamen","Balen"]));