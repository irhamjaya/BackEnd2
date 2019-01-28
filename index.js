const express = require("express");
const app = express();
const routeDataCPU = require("./route/routeDataCPU"); 


app.use(routeDataCPU); 


app.get("/", (req, res) => {
    res.send({ "status": "Server active" });
});
