const request = require("request-promise");

let Wine = {};

Wine.getAll = () => {
    return request({
        uri: "http://myapi-profstream.herokuapp.com/api/d3397e/wines",
        method: "GET",
        json: true
    });
}

module.exports = Wine;
