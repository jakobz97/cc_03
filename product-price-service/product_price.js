module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');
    //To DO: Add the patterns and their corresponding functions

    this.add('role:product,cmd:getProductPrice', productPrice);

    //To DO: add the pattern functions and describe the logic inside the function

    function productPrice(msg, respond) {
        //Filter for the required entry and parse teh string (id) to an integer
        const foundValue = mockData.filter(obj => obj.product_id === parseInt(msg.productId));
        //Check if the value has been found
        if (foundValue.length !== 1) return respond(null, {result: 'error'});
        //Found one matching entry and now return the price
        respond(null, {result: foundValue[0].product_price});
    }

}