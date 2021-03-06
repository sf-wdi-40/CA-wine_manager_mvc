// const request = require("request-promise");
const Wine = require("../../../models/wine");

module.exports = (req, res) => {
    //Step 1: Perform cURL GET request to API using the ID from the route parameter

    //Step 2: Render edit.ejs with information coming back from the API

    // request({
    //     method: "GET",
    //     uri: "http://myapi-profstream.herokuapp.com/api/d3397e/wines/" + req.params.id,
    //     json: true
    // })
    Wine
    .getOne(req.params.id)
    .then((wineData) => {
        res.render("edit", {
            wine: wineData
        });
    })
    .catch((err) => {
        console.log(err);
    });
}
