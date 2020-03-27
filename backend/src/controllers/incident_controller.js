const connection = require("../../obj/db/connection");

module.exports = {
    async create(request, response){
        let {title, description, value} = request.body;
        let ong_id = request.headers.authorization;
        let [id] = await connection('incidents').insert({
            title, description, value, ong_id
        })
        return response.json({id});
    },

    async index(request, response){
        let {page = 1} = request.query;
        let [count] = await connection('incidents').select('*').count();
        response.header("X-Total-Count", count['count(*)']);
        let incs = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page - 1)*5)
        .select(['incidents.*','ongs.name', 'ongs.city', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf']);
        return response.json(incs);
    },

    async delete(request, response){
        let {id} = request.params;
        let ong_id = request.headers.authorization;

        let inc = await connection('incidents').where('id', id).first();

        if(inc.ong_id !== ong_id){
            return response.status(401).json({error: "Not permitted"});
        }
        else{
            await connection('incidents').where('id', id).delete();
            return response.status(204).send();
        }
    }
}