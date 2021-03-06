// const request = require("request-promise");
const Wine = require("../../../models/wine");

module.exports = (req, res) => {
    //Step 1: Process POST request to API with req.body.wine as data object

    //Step 2: On success, redirect back to wines page
        //res.redirect("/wines");

    // request({
    //     uri: "http://myapi-profstream.herokuapp.com/api/d3397e/wines",
    //     method: "POST",
    //     body: req.body.wine,
    //     json: true
    // })
    Wine
    .create(req.body.wine)
    .then(() => {
        res.redirect("/wines");
    })
    .catch((err) => {
        console.log(err);
    });
}
