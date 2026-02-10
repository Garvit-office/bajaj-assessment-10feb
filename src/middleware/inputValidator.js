module.exports = (req, res, next) => {
  const official_email = "YOUR CHITKARA EMAIL";
  const keys = Object.keys(req.body);
  if (keys.length !== 1) {
    return res.status(400).json({ is_success: false, official_email, error: "Exactly one key required" });
  }
  const key = keys[0];
  if (["fibonacci", "prime", "lcm", "hcf", "AI"].indexOf(key) === -1) {
    return res.status(400).json({ is_success: false, official_email, error: "Invalid key" });
  }
  next();
};
