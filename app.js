require("dotenv").config();
const x= require("./helpers/initMongodb");
const express = require("express");
const app = express();
const morgan = require("morgan");
/////routes
const userRouter = require("./routes/userRoutes");

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  }
  
  app.use(express.json());
  app.set('view-engine','ejs')
  app.use(express.urlencoded({extended: false}))

app.use("/api/v1/users",userRouter);

// Running the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`);
});