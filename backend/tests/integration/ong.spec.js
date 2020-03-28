const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../obj/db/connection")



describe("ONG", () => {
    beforeEach(async ()=>{
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(()=> connection.destroy());

    it("should be able to create a new ONG", async ()=>{
        const response = await request(app).post("/ongs").send({
            name : "SANS",
	        email: "contato@sans.org",
	        whatsapp: "5812905812",
	        city: "Sans City",
	        uf: "UT"
        })
    });
})