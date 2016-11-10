class ListModel {
	//TODO: Implement List Model
    constructor(){

    }
    render(database){
        database.sort((a,b)=> a[0]-b[0]);
        console.log(database);
    }
}

module.exports = ListModel;