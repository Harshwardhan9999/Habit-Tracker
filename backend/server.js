/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const habitRoutes = require("./routes/habits");
const userRoutes = require("./routes/users");

app.use('/api/habits', habitRoutes);
app.use("/api/users", userRoutes);

app.listen(5000, () => {
    console.log("Server started at port 5000");
})
