class BasePunchStarter {
    static validateString(obj) {
        if (typeof obj == 'string') return obj;
        else throw new TypeError();
    }

    static validateNumber(obj) {
        if (typeof obj == 'number') return obj;
        else throw new TypeError();
    }

    static validateArray(obj) {
        if (Array.isArray(obj)) return obj;
        else throw new TypeError();
    }

    constructor(type, id, name, manufacturer, description, genres, targetPrice) {
        if (new.target === BasePunchStarter) {
            throw new TypeError("Cannot construct BasePunchStarter instances directly");
        }
        this._type = type;
        this._id = BasePunchStarter.validateNumber(id);
        this._name = BasePunchStarter.validateString(name);
        this._manufacturer = BasePunchStarter.validateString(manufacturer);
        this._description = BasePunchStarter.validateString(description);
        this._genres = BasePunchStarter.validateArray(genres).map(x=>BasePunchStarter.validateString(x));
        this._targetPrice = BasePunchStarter.validateNumber(targetPrice);
        this.accumulatedMoney = 0;
    }

    set accumulatedMoney(money) {
        this._accumulatedMoney = BasePunchStarter.validateNumber(money);
    }

    get accumulatedMoney() {
        return this._accumulatedMoney;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get manufacturer() {
        return this._manufacturer;
    }

    get description() {
        return this._description;
    }

    get genres() {
        return this._genres;
    }

    get targetPrice() {
        return this._targetPrice;
    }

}

module.exports = BasePunchStarter;
