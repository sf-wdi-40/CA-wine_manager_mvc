const express = require("express");
const app = express();

//Require the "request" module to make cURL requests from our back end
const request = require("request-promise");

//Configure our app to use EJS templating
app.set("view engine", "ejs");

//Tell express where to find the static assets served by OUR server (AKA not a CDN)
app.use(express.static("./assets"));

app.get("/wines", (req, res) => {
    //Step 1: Make a request to the wine API with the request-promise module

    //Step 2: Console.log the data returned (Note: the console.log will now show up in the terminal!)

    request({
        uri: "http://myapi-profstream.herokuapp.com/api/d3397e/wines",
        method: "GET",
        json: true
    })
    .then((wineData) => {
        //Render the index.ejs template from the "views" folder with the data from the API
        res.render("index", {
            wines: wineData
        });
    })
    .catch((err) => {
        console.log(err);
    });
});

app.listen(3000, () => {
    console.log("Server started on port 3000...");
});
