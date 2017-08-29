// const request = require("request-promise");
const Wine = require("../../../models/wine");

module.exports = (req, res) => {
    // request({
    //     method: "PUT",
    //     uri: "http://myapi-profstream.herokuapp.com/api/d3397e/wines/" + req.params.id,
    //     body: req.body.wine,
    //     json: true
    // })
    Wine
    .update(req.params.id, req.body.wine)
    .then(() => {
        res.redirect("/wines");
    })
    .catch((err) => {
        console.log(err);
    });
}
