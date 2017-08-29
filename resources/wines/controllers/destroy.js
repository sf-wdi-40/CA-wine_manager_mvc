const request = require("request-promise");

module.exports = (req, res) => {
    request({
        method: "DELETE",
        uri: "http://myapi-profstream.herokuapp.com/api/d3397e/wines/" + req.params.id
    })
    .then(() => {
        res.redirect("/wines");
    })
    .catch((err) => {
        console.log(err);
    });
}
