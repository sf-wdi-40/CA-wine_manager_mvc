const express = require("express");
const app = express();

//Require the "request" module to make cURL requests from our back end
const request = require("request-promise");

//Configure our app to use EJS templating
app.set("view engine", "ejs");

//Configure body parser to extract data from forms (and AJAX requests)
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Configure method override to allow us to make PUT and DELETE requests with HTML forms
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

//Tell express where to find the static assets served by OUR server (AKA not a CDN)
app.use(express.static("./assets"));

// app.get("/wines", (req, res) => {
    //Step 1: Make a request to the wine API with the request-promise module

    //Step 2: Console.log the data returned (Note: the console.log will now show up in the terminal!)

//     request({
//         uri: "http://myapi-profstream.herokuapp.com/api/d3397e/wines",
//         method: "GET",
//         json: true
//     })
//     .then((wineData) => {
//         //Render the index.ejs template from the "views" folder with the data from the API
//         res.render("index", {
//             wines: wineData
//         });
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// });

app.post("/wines", (req, res) => {
    //Step 1: Process POST request to API with req.body.wine as data object

    //Step 2: On success, redirect back to wines page
        //res.redirect("/wines");

    request({
        uri: "http://myapi-profstream.herokuapp.com/api/d3397e/wines",
        method: "POST",
        body: req.body.wine,
        json: true
    })
    .then(() => {
        res.redirect("/wines");
    })
    .catch((err) => {
        console.log(err);
    });
});

app.get("/wines/:id/edit", (req, res) => {
    //Step 1: Perform cURL GET request to API using the ID from the route parameter

    //Step 2: Render edit.ejs with information coming back from the API

    request({
        method: "GET",
        uri: "http://myapi-profstream.herokuapp.com/api/d3397e/wines/" + req.params.id,
        json: true
    })
    .then((wineData) => {
        res.render("edit", {
            wine: wineData
        });
    })
    .catch((err) => {
        console.log(err);
    });
});

app.put("/wines/:id", (req, res) => {
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
});

app.delete("/wines/:id", (req, res) => {
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
});

app.listen(3000, () => {
    console.log("Server started on port 3000...");
});
