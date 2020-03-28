const crypto = require('crypto');
const connection = require("../../obj/db/connection");
const generateID = require("../utils/generateRandomID");
module.exports = {
    
    async create(request, response){
        let {name, email, whatsapp, city, uf} = request.body;

        let id = generateID();
        
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })
    
        return response.json({id});
    },

    async index(request, response){
        let ongs = await connection('ongs').select('*');
        return response.json(ongs);
    }
}

