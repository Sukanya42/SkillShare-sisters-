const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const skillRoutes = require("./routes/skill");

const app = express();

app.use(cors({
  origin: "*"
}));
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

app.use("/api/auth", authRoutes);
app.use("/api/skills", skillRoutes);

app.get("/", (req,res)=>{
  res.send("Skillshare Sisters API Running 🚀");
});

app.listen(5000, ()=> console.log("Server running on 5000"));
