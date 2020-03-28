const generateID = require("../../src/utils/generateRandomID");

describe("Generate random ID", ()=>{
    it("Should generate a random alphanumeric ID", ()=>{
        expect(generateID()).toHaveLength(8)
    })
})