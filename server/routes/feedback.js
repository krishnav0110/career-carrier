const router = require("express").Router();
const Feedback = require("../models/Feedback");
const User = require('../models/User');

// add feedback
router.post("/", async (req, res) => {
  const feedback = new Feedback(req.body);
  try {
    const savedFeedback = await feedback.save();
    res.status(200).json(savedFeedback);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get all feedbacks
router.get("/", async (req, res) => {
  try {
    const savedFeedbacks = await Feedback.find();
    const feedbacks = await Promise.all(savedFeedbacks.map(async (f) => {
      const user = await User.findById(f.userId);
      const feedback = {
        "_id": f._id,
        "name": user.firstName + " " + user.lastName,
        "rating": f.rating,
        "review": f.review,
      };
      return feedback;
    }));
    console.log(feedbacks);
    res.status(200).json(feedbacks);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;