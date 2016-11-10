class BasePunchStarter {
    checkStringValidaty(obj) {
        if (typeof obj === 'string') return obj;
        else throw new TypeError();
    }

    checkNumberValidaty(obj) {
        if (typeof obj === 'number') return obj;
        else throw new TypeError();
    }

    constructor(id, name, manufacturer, description, genres, targetPrice) {
        if (new.target === BasePunchStarter) {
            throw new TypeError("Cannot construct BasePunchStarter instances directly");
        }
        let _this = this;
        this._id = (function (id) {
            return _this.checkNumberValidaty(id);
        })(id);

        this._name = (function (name) {
            return _this.checkStringValidaty(name);
        })(name);

        this._manufacturer = (function (manufacturer) {
            return _this.checkStringValidaty(manufacturer);
        })(manufacturer);
        this._description = (function (description) {
            return _this.checkStringValidaty(description);
        })(description);
        this._genres = (function (genres) {
            let returnVal=[];
            if(!typeof genres==='array') throw new TypeError()
            for(let index in genres){
                 returnVal.push(_this.checkStringValidaty(genres[Number(index)]));
            }
            return returnVal;
        })(genres);
        this._targetPrice = (function (targetPrice) {
            return _this.checkNumberValidaty(targetPrice);
        })(targetPrice);

    }
    get id(){
        return this._id;
    }
    get name(){
        return this._name;
    }
    get manufacturer(){
        return this._manufacturer;
    }
    get description(){
        return this._description;
    }
    get genres(){
        return this._genres;
    }
    get targetPrice(){
        return this._targetPrice;
    }


}

module.exports = BasePunchStarter;
