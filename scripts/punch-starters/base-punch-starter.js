class BasePunchStarter {
    static checkStringValidaty(obj) {
        if (typeof obj == 'string') return obj;
        else throw new TypeError();
    }

    static checkNumberValidaty(obj) {
        if (typeof obj == 'number') return obj;
        else throw new TypeError();
    }

    constructor(id, name, manufacturer, description, genres, targetPrice) {
        if (new.target === BasePunchStarter) {
            throw new TypeError("Cannot construct BasePunchStarter instances directly");
        }
        let _this = this;
        this._id = (function (id) {
            return BasePunchStarter.checkNumberValidaty(id);
        })(id);

        this._name = (function (name) {
            return BasePunchStarter.checkStringValidaty(name);
        })(name);

        this._manufacturer = (function (manufacturer) {
            return BasePunchStarter.checkStringValidaty(manufacturer);
        })(manufacturer);
        this._description = (function (description) {
            return BasePunchStarter.checkStringValidaty(description);
        })(description);
        this._genres = (function (genres) {
            let returnVal=[];
            if(!typeof genres==='array') throw new TypeError();
            for(let index in genres){
                 returnVal.push(BasePunchStarter.checkStringValidaty(genres[Number(index)]));
            }
            return returnVal;
        })(genres);
        this._targetPrice = (function (targetPrice) {
            return BasePunchStarter.checkNumberValidaty(targetPrice);
        })(targetPrice);
        this.accumulatedMoney = 0;
    }
    set accumulatedMoney(money){
        this._accumulatedMoney=BasePunchStarter.checkNumberValidaty(money);
    }
    get accumulatedMoney(){
        return this._accumulatedMoney;
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
