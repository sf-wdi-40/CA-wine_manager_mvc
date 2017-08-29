const request = require("request-promise");

let Wine = {};

Wine.getAll = () => {
    return request({
        uri: "http://myapi-profstream.herokuapp.com/api/d3397e/wines",
        method: "GET",
        json: true
    });
}

Wine.create = (wineData) => {
    return request({
        uri: "http://myapi-profstream.herokuapp.com/api/d3397e/wines",
        method: "POST",
        body: wineData,
        json: true
    });
}

Wine.getOne = (id) => {
    return request({
        method: "GET",
        uri: "http://myapi-profstream.herokuapp.com/api/d3397e/wines/" + id,
        json: true
    });
}

Wine.update = (id, wineData) => {
    return request({
        method: "PUT",
        uri: "http://myapi-profstream.herokuapp.com/api/d3397e/wines/" + id,
        body: wineData,
        json: true
    });
}

Wine.destroy = (id) => {
    return request({
        method: "DELETE",
        uri: "http://myapi-profstream.herokuapp.com/api/d3397e/wines/" + id
    });
}

module.exports = Wine;
