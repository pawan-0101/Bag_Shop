const express = require("express");
const router = express.Router();
const ownerModel = require("../Models/owner.model");
require("dotenv").config();

// ✅ Create Owner (only in development mode)
if (process.env.NODE_ENV === "development") {
  router.post("/create", async (req, res) => {
    try {
      const owners = await ownerModel.find();

      if (owners.length > 0) {
        return res
          .status(403) // 403 = Forbidden (better than 500)
          .send("You don't have permission to create a new owner.");
      }

      const { fullname, email, password } = req.body;

      if (!fullname || !email || !password) {
        return res.status(400).send("All fields (fullname, email, password) are required.");
      }

      const createdOwner = await ownerModel.create({
        fullname,
        email,
        password,
      });

      res.status(201).json(createdOwner);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
} else {
  // ✅ Block route in production for safety
  router.post("/create", (req, res) => {
    res.status(403).send("This route is disabled in production.");
  });
}

// ✅ Test route
router.get("/", (req, res) => {
  res.send("hey it's working 🚀");
});

module.exports = router;
