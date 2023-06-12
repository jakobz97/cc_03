const mockData = require("./MOCK_DATA.json");
module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductURL', productURL);
    this.add('role:product,cmd:getProductName', productName);


    //To DO: add the pattern functions and describe the logic inside the function

    function productURL(msg, respond) {
        //Filter for the required entry and parse teh string (id) to an integer
        const foundValue = mockData.filter(obj => obj.product_id === parseInt(msg.productId));
        //Check if the value has been found
        if (foundValue.length !== 1) return respond(null, {result: 'error'});
        //Found one matching entry and now return the URL
        respond(null, {result: foundValue[0].product_url});
    }

    function productName(msg, respond) {
        //Filter for the required entry and parse teh string (id) to an integer
        const foundValue = mockData.filter(obj => obj.product_id === parseInt(msg.productId));
        //Check if the value has been found
        if (foundValue.length !== 1) return respond(null, {result: 'error'});
        //Found one matching entry and now return the name
        respond(null, {result: foundValue[0].product_name});
    }

}