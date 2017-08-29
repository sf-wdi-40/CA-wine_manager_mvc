const request = require("request-promise");

module.exports = (req, res) => {
    request({
        method: "PUT",
        uri: "http://myapi-profstream.herokuapp.com/api/d3397e/wines/" + req.params.id,
        body: req.body.wine,
        json: true
    })
    .then(() => {
        res.redirect("/wines");
    })
    .catch((err) => {
        console.log(err);
    });
}
