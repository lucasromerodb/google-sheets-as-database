var sheets = require("./sheets");

var appRouter = function(app) {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  app.get("/", function(req, res) {
    res.status(200).send({ message: "Welcome to our restful API" });
  });

  app.get("/products", function(req, res) {
    sheets.get(res);
  });
};

module.exports = appRouter;
