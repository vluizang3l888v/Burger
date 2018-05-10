    
    //the express 
    var express = require("express");

    //the bodyParser
    var bodyParser = require("body-parser");

    //the powerful Port
    var PORT = process.env.PORT || 8000;

    //Express attack
    var app = express();
      
    //ORM require for protection against SQL attack. 


    ////////////////////////////////////////
    var path = require("path");
    ////////////////////////////////////////

    // Serve static content for the app from the "public" directory in the application directory.
    //don't get it. 
    

    
    //connect to the public file. 
    //app.use(express.static("public"));
    //get public files, all in public.
app.use(express.static("public"));



    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended:true }));

    //parse application/JSON. 
    app.use(bodyParser.json());



    //for the Staticroute. UNK what Static Route does. 
    //app.use(express.static(path.join(__dirname, 'public')));
    ///////////////////////////////////////

    //require handlebars I think?
    var exphbs = require("express-handlebars");

    app.engine("handlebars", exphbs({ defaultLayout: "main" }));
    app.set("view engine", "handlebars");
    
    var routes = require("./controllers/burgersController.js");
    
    app.use(routes);
    
    app.listen(PORT, function() {
      console.log("Listening on port:%s", PORT);
    });
    






