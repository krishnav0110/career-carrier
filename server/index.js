const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const predictRoute = require("./routes/predict");
const questionRoute = require("./routes/question");
const feedbackRoute = require("./routes/feedback");

/* setting up the configurations for connection */
dotenv.config();
app.use(express.json());
app.use(cors());

/* mongodb connection */
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(console.log("connected to MongoDB"))
.catch((err) => console.log(err));

/* all the paths */
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/predict", predictRoute);
app.use("/api/question", questionRoute);
app.use("/api/feedback", feedbackRoute);

/* starting the server */
app.listen("5001", () => {
  	console.log("backend is running");
});