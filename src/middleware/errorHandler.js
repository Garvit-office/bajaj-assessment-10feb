module.exports = (err, req, res, next) => {
  const official_email = "YOUR CHITKARA EMAIL";
  res.status(500).json({
    is_success: false,
    official_email,
    error: err.message || "Internal Server Error"
  });
};
