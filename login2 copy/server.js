const express = require("express"),
    bp = require("body-parser"),
    path = require("path"),
    session = require("express-session");
    port = 8000,
    app = express();

    app.use(express.static(path.join(__dirname, "./client/dist")));
    app.use(session({secret: "HAHAHAHAHAHAHA"}));
    app.use(bp.json());

    require('./server/config/mongoose');
    require('./server/config/routes')(app);
    


    app.listen(port, function(){
        console.log(`Listening on port ${port}`);
    })