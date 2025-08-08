require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes/auth");
const connectDB = require("./utils/db");
app.use(express.json());
// Mount the Router: To use the router in your main Express app, you can "mount" it at a specific URL prefix
app.use("/api/auth", router);


// app.route("/").get((req, res) => {
//   res.status(200).send("Welcome to home");
// });

const PORT = 5000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at port: ${PORT}`);
        // console.log('Server is running at port: ' + PORT);
    })
})




