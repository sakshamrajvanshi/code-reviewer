const aiService = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
  const { code } = req.body;

  if (!code || typeof code !== "string") {
    return res.status(400).send("Code is required");
  }

  try {
    const response = await aiService(code);
    res.status(200).send(response); // or: res.json({ response })
  } catch (err) {
    console.error("AI Review Error:", err);
    res.status(500).send("Something went wrong while generating the review");
  }
};
