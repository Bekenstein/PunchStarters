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
        this.id = (function (id) {
            return _this.checkNumberValidaty(id);
        })(id);

        this.name = (function (name) {
            return _this.checkStringValidaty(name);
        })(name);

        this.manufacturer = (function (manufacturer) {
            return _this.checkStringValidaty(manufacturer);
        })(manufacturer);
        this.description = (function (description) {
            return _this.checkStringValidaty(description);
        })(description);
        this.genres = (function (genres) {
            let returnVal=[];
            for(let index in genres){
                 returnVal.push(_this.checkStringValidaty(genres[Number(index)]));
            }
            return returnVal;
        })(genres);
        this.targetPrice = (function (targetPrice) {
            return _this.checkNumberValidaty(targetPrice);
        })(targetPrice);

    }


    //TODO: Implement BasePunchStarter
}
module.exports = BasePunchStarter;
