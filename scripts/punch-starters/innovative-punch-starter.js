let basePunchStarter = require("./base-punch-starter.js");
class InnovativePunchStarter extends basePunchStarter {
	//TODO: Implement InnovativePunchStarter
    constructor(id,name,manufacturer,description,genres,targetPrice) {
        super('Inovation',id, name, manufacturer, description, genres, targetPrice);
    }
}
module.exports = InnovativePunchStarter;