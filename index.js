const express = require("express");
const app = express();

//Configure our app to use EJS templating
app.set("view engine", "ejs");

app.listen(3000, () => {
    console.log("Server started on port 3000...");
});
