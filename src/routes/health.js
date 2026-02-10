const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    is_success: true,
    official_email: "YOUR CHITKARA EMAIL"
  });
});

module.exports = router;
