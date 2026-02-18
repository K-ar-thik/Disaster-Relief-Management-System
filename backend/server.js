  const express = require("express");
  const mongoose = require("mongoose");
  const cors = require("cors");

  const app = express();

  app.use(cors());
  app.use(express.json());

  mongoose.connect("mongodb://127.0.0.1:27017/drros");

  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });
  const User = require("./models/User");

  app.post("/login", async (req, res) => {

    const { username, password } = req.body;

    const user = await User.findOne({ username, password });

    if(user){
      res.json({ success: true, role: user.role });
    } else {
      res.json({ success: false });
    }

  });