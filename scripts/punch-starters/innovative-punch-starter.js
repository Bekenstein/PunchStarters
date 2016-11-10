let basePunchStarter = require("./base-punch-starter.js");

class InnovativePunchStarter extends basePunchStarter {
    constructor(id, name, manufacturer, description, genres, targetPrice) {
        super(id, name, manufacturer, description, genres, targetPrice);
    }
}

module.exports = InnovativePunchStarter;