const express = require('express');
const router = express.Router();
const User = require('../model/userModel')
var bcrypt = require('bcryptjs');
router.post('/register', async (req, res) => {
  const { name, email, password, cpassword } = req.body;

  var salt = await bcrypt.genSalt(12);
  var hashCpassword = await bcrypt.hash(cpassword, salt);
  var hashPassword = await bcrypt.hash(password, salt);

  const newuser = new User({ name, email, password: hashPassword, cpassword: hashCpassword });
  if (!name || !email || !password || !cpassword) {
    res.status(400).json({
      message: "Please Fill Properly"
    })
  }
  try {
    const users = await User.findOne({ email: email });

    if (users) {
      res.status(400).json({
        message: "User Registation Fail"
      })
    } else {
      await newuser.save();
      res.status(201).json({
        success: true,
        message: "User Registation Successfull"
      })
    }

  } catch (error) {
    res.status(400).json({
      message: "User Registation fail",
      Error: error
    })
  }
})


router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {


    const user = await User.find({ email });
    if (user.length > 0) {

      const checkPassword = await bcrypt.compare(password, user[0].password);
      console.log(checkPassword);
      if (checkPassword === true) {
        const currentUser = {
          name: user[0].name,
          email: user[0].email,
          isAdmin: user[0].isAdmin,
          _id: user[0]._id,
        };
        res.status(200).send(currentUser);
      } else {
        res.status(400).json({
          message: "Login Failed",
        });
      }
    } else {
      res.status(400).json({
        message: "Login Failed",
      });
    }
  } catch (error) {
    res.status(404).json({
      message: "Something Went wrong",
    });
  }
});


router.get("/getallusers", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(404).json({ message: error.stack });
  }
});

router.post("/deleteuser", async (req, res) => {
  const userid = req.body.userid;
  try {
    await User.findOneAndDelete({ _id: userid });
    res.status(200).send("User Deleted");
  } catch (error) {
    res.status(404).json({ message: error.stack });
  }
});

module.exports = router;