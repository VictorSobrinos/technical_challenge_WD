const router = require("express").Router();
const phonesData = require('../../data/phones.json')

router.get("/", (req, res, next) => {
  res.json("All good in here");
  console.log('phonesData')
});

router.get("/phones", (req, res, next) => {
  res.json(phonesData);
  // console.log('phonesData')
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)
module.exports = router;
