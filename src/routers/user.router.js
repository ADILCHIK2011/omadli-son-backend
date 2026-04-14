const User = require("../models/user.model.js");
const RandomNumber = require("../models/randomNumber.model.js");

const router = require("express").Router();

router.post("/register", async (req, res) => {
  const { username, password, email, phone } = req.body;
  if (!username || !password || !email || !phone) {
   return res.status(400).json({
      message: "Iltimos barcha inputlar to'ldirilganligini tekshiring",
    });
  }
  const topilganUser = await User.findOne({ username });
  if (topilganUser) {
    return res.status(400).json({
        message: "Bunday username bilan akkaunt yaratib bo'lingan"
    })
  }

  const yangiUser = new User({
    username,
    password,
    email,
    phone
  })

  await yangiUser.save()

  res.status(201).json({
    message: "Akkaunt muvaffaqiyatli yaratildi",
    yangiUser
  })

});

router.post("/login", async (req, res) => {
      const { username, password } = req.body;
  
      if (!username || !password) {
        return res.status(400).json({
          message: "Username va parol kiritilishi shart",
        });
      }
  
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(404).json({
          message: "Bunday foydalanuvchi topilmadi",
        });
      }
  
      if (user.password !== password) {
        return res.status(401).json({
          message: "Parol noto'g'ri",
        });
      }
  
      res.status(200).json({
        message: "Muvaffaqiyatli kirildi",
        user,
      });
  
  });

  router.post("/random-raqam", async (req, res) => {
    const { userId } = req.body

    if (!userId) {
        return res.status(400).json({ message: "foydalanuvchi id kerak" })
    }

    const number = Math.floor(Math.random() * 899) + 101

    const yangiSon = new RandomNumber({ userId, number })
    await yangiSon.save()

    res.status(201).json({
        message: "Random son saqlandi",
        number
    })
})


module.exports = router