const connection = require("../../obj/db/connection");

module.exports = {
    async create(request, response){
        let {id} = request.body;
        let [ong] = await connection('ongs').where('id', id).select('name');
        if(!ong){
            return response.status(400).error("No ngo with this ID");
        }
        else{
            return response.json(ong);
        }
    }
}