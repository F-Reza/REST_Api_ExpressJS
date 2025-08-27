require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRouter = require("./routes/auth");
const contactRouter = require("./routes/contact");
const connectDB = require("./utils/db");

const corsOptions = {
    origin: "http://localhost:5173", // Replace with your frontend URL
    optionsSuccessStatus: 200,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Allow cookies to be sent
    allowedHeaders: "Content-Type,Authorization",
};
app.use(cors(corsOptions));
// app.use(cors());
app.use(express.json());
// Mount the Router: To use the router in your main Express app, you can "mount" it at a specific URL prefix
app.use("/api/auth", authRouter);
app.use("/api/form", contactRouter);


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




