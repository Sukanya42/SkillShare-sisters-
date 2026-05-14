const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async (req,res)=>{
  const hashed = await bcrypt.hash(req.body.password,10);
  const user = new User({...req.body, password: hashed});
  await user.save();
  res.json({message:"Registered successfully"});
});

router.post("/login", async (req,res)=>{
  const user = await User.findOne({email:req.body.email});
  if(!user) return res.status(404).json({message:"User not found"});

  const valid = await bcrypt.compare(req.body.password, user.password);
  if(!valid) return res.status(400).json({message:"Wrong password"});

  const token = jwt.sign(
    {id:user._id, email:user.email},
    process.env.JWT_SECRET,
    {expiresIn:"7d"}
  );

  res.json({message:"Login success", token, user});
});

module.exports = router;
