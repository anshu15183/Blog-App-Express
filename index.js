const express = require("express");
const app = express();
// const cors = require("cors");
const path = require("path");

require("dotenv").config();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
// Define the CORS options
// const corsOptions = {
// 	credentials: true,
// 	origin: ["http://localhost:5000", "http://localhost:80"], // Whitelist the domains you want to allow
// };
// app.use(cors(corsOptions)); // Use the cors middleware with your options

const blog = require("./routes/blog");

// mount
app.use("/api/v1", blog);

const dbConnect = require("./config/database");
// const { version } = require("mongoose");
dbConnect();

// Start Server
app.listen(PORT, () => {
	console.log(`App is Running at http://localhost:${PORT}`);
});

// Default Route
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "./public/index.html"));
});
