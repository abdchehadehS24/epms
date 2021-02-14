require("rootpath")();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");
// const jwt = require('_helpers/jwt');
// const errorHandler = require('_helpers/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
// app.use(jwt());
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
// api routes
app.use("/users", require("./routes/userRoutes"));
app.use("/patients", require("./routes/patientRoutes"));
app.use("/assessments", require("./routes/assessmentRoutes"));
app.use("/assessment_type", require("./routes/assessment_typeRoutes"));
app.use("/users_groups", require("./routes/user_groupRoutes"));

// global error handler
// app.use(errorHandler);

// start server
const port =
  process.env.NODE_ENV === "production" ? process.env.PORT || 80 : 4000;
const server = app.listen(port, function () {
  console.log("Server listening on port " + port);
});
