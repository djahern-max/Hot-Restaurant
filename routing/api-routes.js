var tableData = require("../data/table-data");
var waitListData = require("../data/waitinglist-data");

module.exports = function (app) {

    app.get("api/tables", function (req, res) {
        res.json(tableData);

    });

    app.get("/api/waitlist", function (req, res) {
        res.json(waitListData);
    });

    app.post("/api/tables", function (req, res) {

        if (tableData.length < 5) {
            tableData.push(req.body)
            res.json(true);
        }
        else {
            waitListData.push(req.body);
            req.json(false);
        }
    });
    app.post("/api/clear", function () {
        tableData.length = [];
        waitListData.length = [];

        console.log(tableData);
        console.log(waitListData);
    });
};


