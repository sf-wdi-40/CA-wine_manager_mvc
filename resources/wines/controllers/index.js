const request = require("request-promise");
const Wine = require("../../../models/wine");

module.exports = (req, res) => {
    //Step 1: Make a request to the wine API with the request-promise module

    //Step 2: Console.log the data returned (Note: the console.log will now show up in the terminal!)

    // request({
    //     uri: "http://myapi-profstream.herokuapp.com/api/d3397e/wines",
    //     method: "GET",
    //     json: true
    // })
    Wine
    .getAll()
    .then((wineData) => {
        //Render the index.ejs template from the "views" folder with the data from the API
        res.render("index", {
            wines: wineData
        });
    })
    .catch((err) => {
        console.log(err);
    });
}
