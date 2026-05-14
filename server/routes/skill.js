const router = require("express").Router();
const Skill = require("../models/Skill");

router.post("/add", async (req,res)=>{
  const skill = new Skill(req.body);
  await skill.save();
  res.json(skill);
});

router.get("/", async (req,res)=>{
  const skills = await Skill.find().sort({createdAt:-1});
  res.json(skills);
});

module.exports = router;
